import mongoose from "mongoose";
export default async function connectToDb(url) {
    await mongoose.connect(url);
    console.log('Connected to mongodb');
}
//# sourceMappingURL=db.js.map