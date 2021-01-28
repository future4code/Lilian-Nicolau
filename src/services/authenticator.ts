import * as jwt from "jsonwebtoken";

export function generateToken(id: string): string {

    const token: string = jwt.sign({id},
    process.env.JWT_KEY as string,
    {expiresIn: "1min"});

    return(token)
}

// const expiresIn = "1min";

// export function generateToken(input:AuthenticationData): string {
//     const token: string = jwt.sign(
//         {
//             id: input.id,
//         },
//         {
//             process.env.JWT_KEY as string,
//         },
//         {
//             expiresIn
//         }
//     );
//     return token
// }

export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
}
    type AuthenticationData = {
        id: string
    }



