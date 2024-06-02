const db = require("../db");
const bcrypt = require("bcrypt");
const{
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError} = require("../expressError");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { sqlForPartialUpdate } = require("../helpers/sql");



class User{

    /**Authenticate user. 
     * Returns {username, first_name, last_name}
     * Throws unathorized error if username is not found or password does not match user's password
     */
    static async authenticate(username, password){
        const result = await db.query(
                `SELECT username, password, 
                    first_name AS "firstName", 
                    last_name AS "lastName",
                    email,
                    is_admin AS "isAdmin" 
                FROM users WHERE username = $1`, [username],
        );
        const user = result.rows[0];

        if(user) {
            const isValid = await bcrypt.compare(password,user.password);
            if(isValid){
                delete user.password;
                return user;
            }
        }
    throw new UnauthorizedError("Invalise username or password.")
    }

   /**
     * Register a new user.
     * Check if username already exists, if yes, throw BadRequestError.
     * If username is not taken, create user in database.
     * Returns { username, firstName, lastName, email, isAdmin }
     */
    static async register({username, password, firstName, lastName, email, isAdmin}){

        const checkIfDuplicate = await db.query(
            `SELECT username FROM users WHERE username = $1`, [username]);

            if(checkIfDuplicate.rows[0]){
                throw new BadRequestError(`Duplicate username:${username}`);
            }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `INSERT INTO users (
                username,
                password,
                first_name, 
                last_name, 
                email,
                is_admin
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING username,
                first_name AS "firstName",
                last_name AS "lastName",
                email, 
                is_admin AS "isAdmin"`,
            [username, hashedPassword, firstName, lastName, email, isAdmin]
        );
        const user = result.rows[0];

        return user;
    }


  /**
     * Find user by username.
     * If username does not exist, throw NotFoundError.
     * Returns { username, firstName, lastName, email, isAdmin }
     */

        static async findUser(username){
            const result = await db.query(
                `SELECT username,
                    first_name AS "firstName",
                    last_name AS "lastName",
                    email, 
                    is_admin AS "isAdmin"
                FROM users
                WHERE username = $1`,
                [username]
            );

            const user = result.rows[0];

            if(!user)throw new NotFoundError(`${username} not found.`)

            return user;
        }
  /**
     * Update user data.
     * Update user: firstName, lastName, email, isAdmin.
     * Returns { username, firstName, lastName, email, isAdmin }
     */
    static async update(username, data){
        if(data.password){
            data.password = await bcrypt.hash(data.passwordm, BCRYPT_WORK_FACTOR);
        }

        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
              firstName: "first_name",
              lastName: "last_name",
              email: "email",
              isAdmin: "is_admin",
            });
        const usernameVarIdx = "$" + (values.length + 1);
    
        const querySql = `UPDATE users 
                          SET ${setCols} 
                          WHERE username = ${usernameVarIdx} 
                          RETURNING username,
                                    first_name AS "firstName",
                                    last_name AS "lastName",
                                    email,
                                    is_admin AS "isAdmin"`;
        const result = await db.query(querySql, [...values, username]);
        const user = result.rows[0];
    
        if (!user) throw new NotFoundError(`${username} not found.`);
    
        delete user.password;
        return user;
    }
 /**
     * Delete given user from database; returns undefined.
     */
  static async remove(username) {
    let result = await db.query(
          `DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
        [username],
    );
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`${username} not found.`);
  }


}


module.exports = User;