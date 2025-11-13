import mongoose from "mongoose";
export declare const CartModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    products: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        quantity: number;
        size?: string | null;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=cartModel.d.ts.map