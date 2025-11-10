import jwt from "jsonwebtoken";

export const generateToken = (userID , res) => {
    const token = jwt.sign({userID} , process.env.JWT_SECRET , {expiresIn : "15d"});
    res.cookie("token" , token , {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        partitioned: true,
    });

    return token;
};


// import jwt from "jsonwebtoken";

// export const generateToken = (userID , res) => {
//     const token = jwt.sign({userID} , process.env.JWT_SECRET , {expiresIn : "15d"});
//     res.cookie("token" , token , {
//         httpOnly : true, // more secure
//         secure : process.env.NODE_ENV !== "development",
//         sameSite : "strict", // more secure
//         maxAge : 15 * 24 * 60 * 60 * 1000
//     });

//     return token;
// };