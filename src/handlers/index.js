import User from "../user/user-model.js";
import { getHashFromClearText } from "../utils/crypto.js";


export default function addRouteHandlers(app){
    app.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    app.post("/signup", async (request, reply) => {
        const { email, password, username } = request.body;
        const user = new User({ 
            email, 
            password: getHashFromClearText(password), 
            username 
        });
        await user.save();
        return user.toJSON();
    });

}