import mongoose from "mongoose";
export declare const wishListModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
    }> & {
        productId: mongoose.Types.ObjectId;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=wishlist.model.d.ts.map