/**
 * @interface
 * PURE blogCategory: This is an interface for primitives types of blogCategory
 */
export interface FQl_dynamic_blogCategory_PuBlogCategory {
    name: string;
    enName: string;
    icon?: string;
    description?: string;
}

export interface FQl_dynamic_blogCategory_PuRelBlogCategory {
    name: string;
    enName: string;
    icon?: string;
    description?: string;
    blogPosts?: string[] | FQl_dynamic_blogPost_IBlogPost[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_blogPost_IBlogPost {
    title: string;
    summary: string;
    content: string;
    photo: string;
    totalViews?: number;
    totalComments?: number;
    totalLikes?: number;
    _id: string;
    updateAt?: Date;
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}

export interface FQl_dynamic_user_PuRelUser {
    name: string;
    lastName: string;
    phone: number;
    gender: FQl_dynamic_user_Gender;
    birthDate?: Date;
    postalCode: string;
    level: FQl_dynamic_user_Level[];
    email?: string;
    isActive?: boolean;
    creditCardNumber: number;
    _id: string;
    updateAt?: Date;
    country?: string | FQl_dynamic_country_ICountry;
    state?: string | FQl_dynamic_state_IState;
    city?: string | FQl_dynamic_city_ICity;
    shoppingCart?: string | FQl_dynamic_shoppingCart_IShoppingCart;
}

export enum FQl_dynamic_user_Gender {
    Male = "Male",
    Female = "Female"
}

export enum FQl_dynamic_user_Level {
    /**
     * The most powerful user role because it gives you access to everything.
     *  As the website owner, this should be your role
     * in addition this role is shop manager
     */
    Admin = "Admin",
    /**
     * Assigned to new customers when they create an account on your website.
     *  This role is basically is:a normal blog subscriber,
     *  and: a customers that can edit their own account information and view past or current order
     */
    Normal = "Normal",
    /**
     * This user is typically responsible for managing content.
     *  Editors can add, edit, publish, and delete any posts and media,
     *  including those written by other users. Editors can also moderate, edit, and delete comments,
     *  and add and edit categories and tags
     */
    Editor = "Editor",
    /**
     * Typically responsible for tasks related to writing content.
     *  They can create, edit, and publish their own posts.
     * They can also delete their own posts (even when they’re already published),
     *  but cannot edit or delete posts written by other user
     */
    Author = "Author",
    /** a ghost user */
    Ghost = "Ghost"
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_country_ICountry {
    states?: FQl_dynamic_state_PuRelState[];
    cities?: FQl_dynamic_city_PuRelCity[];
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_state_PuRelState {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
    cities?: string[] | FQl_dynamic_city_ICity[];
    country?: string | FQl_dynamic_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_city_ICity {
    state: FQl_dynamic_state_PuRelState;
    country: FQl_dynamic_country_PuRelCountry;
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_country_PuRelCountry {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
    states?: string | FQl_dynamic_state_IState[];
    cities?: string | FQl_dynamic_city_ICity[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_state_IState {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
    country?: FQl_dynamic_country_PuRelCountry;
    cities?: FQl_dynamic_city_PuRelCity[];
}

export interface FQl_dynamic_city_PuRelCity {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
    state?: string | FQl_dynamic_state_IState;
    country?: string | FQl_dynamic_country_ICountry;
}

export interface FQl_dynamic_shoppingCart_IShoppingCart {
    totalPrice: number;
    totalQuantity: number;
    _id: string;
    updateAt?: Date;
    user: FQl_dynamic_user_PuRelUser;
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
}

export interface FQl_dynamic_ware_PuRelWare {
    name: string;
    brand: string;
    photos: string[];
    description: string;
    price: number;
    isDesigned: boolean;
    layers: [object];
    isPromotion: boolean;
    _id: string;
    updateAt?: Date;
    wareType?: string | FQl_dynamic_wareType_IWareType;
    /** the last 50 orders of this ware are kept inside the collection */
    orders?: string | FQl_dynamic_order_IOrder;
}

export interface FQl_dynamic_wareType_IWareType {
    name: string;
    icon: string;
    description: string;
    /** it specifies if the wareType has studio */
    isDesignable: boolean;
    /**
     * if the WareType has studio,the studio features are specified here
     * it is optional because the wareType can
     */
    features?: FQl_dynamic_wareType_Features[];
    _id: string;
    updateAt?: Date;
    /** the last 50 wares */
    wares?: FQl_dynamic_ware_PuRelWare;
}

export enum FQl_dynamic_wareType_Features {
    Emoji = "Emoji",
    Text = "Text",
    RepeatPattern = "RepeatPattern",
    Color = "Color",
    Pic = "Pic",
    HandWriting = "HandWriting",
    Layers = "Layers"
}

export interface FQl_dynamic_order_IOrder {
    /** total price of all the ordered materials */
    totalPrice: number;
    /** totalQuantity of items ordered */
    totalQuantity: number;
    /** a confirmation code that send as a unique code to customer */
    confirmationNumber: number;
    /** Any discount applied (to an Order). */
    discount: number;
    /** the description on the order */
    description: string;
    /** Code used to redeem a discount. */
    discountCode: string;
    paymentStatus: FQl_dynamic_order_PaymentStatus;
    orderStatus: FQl_dynamic_order_OrderStatus;
    _id: string;
    updateAt?: Date;
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
    user: FQl_dynamic_user_PuUser;
}

export enum FQl_dynamic_order_PaymentStatus {
    Paid = "PAID",
    NotPaid = "NOTPAID"
}

export enum FQl_dynamic_order_OrderStatus {
    /** cancelled by store */
    Rejected = "REJECTED",
    Processing = "PROCESSING",
    Delivered = "DELIVERED",
    /** cancelled by user */
    Canceled = "CANCELED"
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_dynamic_user_PuUser {
    name: string;
    lastName: string;
    phone: number;
    gender: FQl_dynamic_user_Gender;
    birthDate?: Date;
    postalCode: string;
    level: FQl_dynamic_user_Level[];
    email?: string;
    isActive?: boolean;
    creditCardNumber: number;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag
 */
export interface FQl_dynamic_blogTag_PuBlogTag {
    name: string;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * PURE blogComment: This is an interface for primitives types of blogComment
 */
export interface FQl_dynamic_comment_PuComment {
    _id: string;
    content: string;
    blogCommentStatus: FQl_dynamic_comment_CommentStatus;
    updateAt?: Date;
}

export enum FQl_dynamic_comment_CommentStatus {
    ACCEPT,
    PENDING,
    REJECT
}

/**
 * @interface
 * Embedded BlogCategory: This is an interface for embedded fields in blogCategory collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_blogCategory_EmBlogCategory {
    /** the last 50 post of each category, is kept here */
    blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

export interface FQl_dynamic_blogPost_PuRelBlogPost {
    title: string;
    summary: string;
    content: string;
    photo: string;
    totalViews?: number;
    totalComments?: number;
    totalLikes?: number;
    _id: string;
    updateAt?: Date;
    /**
     * * @field
     * the relation for user in the blogPost,
     * the objectId should be kept in here,
     * the return type should be from IUser schema
     */
    author: string | FQl_dynamic_user_IUser;
    /**
     * @field
     * the relation for blogCategory in the blogPost,
     * the objectId should be kept in here,
     * the return type should be from IBlogCategory schema
     */
    blogCategory: string | FQl_dynamic_blogCategory_IBlogCategory;
    /**
     * @field
     * the relation for blogTag in the blogPost,
     * the array of objectIds should be kept in here,
     * the return type should be from IBlogTag schema
     */
    blogTags?: string[] | FQl_dynamic_blogTag_IBlogTag[];
    /**
     * @field
     * the relation for likedUsers in the blogPost,
     * (just the 50 last users who liked the post is supposed to keep in here)
     * the array of objectIds should be kept in here,
     * the return type should be from IUser schema
     */
    likedUsers?: string[] | FQl_dynamic_user_IUser[];
    /**
     * @field
     * the relation for comments in the blogPost,
     * (just the 50 last comments of the post is supposed to keep in here)
     * the array of objectIds should be kept in here,
     * the return type should be from IUser schema
     */
    comments?: string[] | FQl_dynamic_comment_IComment[];
}

export interface FQl_dynamic_user_IUser {
    name: string;
    lastName: string;
    phone: number;
    gender: FQl_dynamic_user_Gender;
    birthDate?: Date;
    postalCode: string;
    level: FQl_dynamic_user_Level[];
    email?: string;
    isActive?: boolean;
    creditCardNumber: number;
    _id: string;
    updateAt?: Date;
    addresses?: {
        country: FQl_dynamic_country_PuRelCountry;
        state: FQl_dynamic_state_PuRelState;
        city: FQl_dynamic_city_PuRelCity;
        addressTxt: string;
        };
    shoppingCart?: FQl_dynamic_shoppingCart_PuRelShoppingCart;
}

export interface FQl_dynamic_shoppingCart_PuRelShoppingCart {
    totalPrice: number;
    totalQuantity: number;
    _id: string;
    updateAt?: Date;
    user: string | FQl_dynamic_user_IUser;
    wares: string | FQl_dynamic_ware_IWare[];
}

export interface FQl_dynamic_ware_IWare {
    name: string;
    brand: string;
    photos: string[];
    description: string;
    price: number;
    isDesigned: boolean;
    layers: [object];
    isPromotion: boolean;
    _id: string;
    updateAt?: Date;
    wareType: FQl_dynamic_wareType_PuRelWareType;
    /** the last 50 orders of this ware are kept inside the collection */
    orders: FQl_dynamic_order_PuOrder;
}

export interface FQl_dynamic_wareType_PuRelWareType {
    name: string;
    icon: string;
    description: string;
    /** it specifies if the wareType has studio */
    isDesignable: boolean;
    /**
     * if the WareType has studio,the studio features are specified here
     * it is optional because the wareType can
     */
    features?: FQl_dynamic_wareType_Features[];
    _id: string;
    updateAt?: Date;
    /** the last 50 wares */
    wares?: string | FQl_dynamic_ware_IWare;
}

export interface FQl_dynamic_order_PuOrder {
    /** total price of all the ordered materials */
    totalPrice: number;
    /** totalQuantity of items ordered */
    totalQuantity: number;
    /** a confirmation code that send as a unique code to customer */
    confirmationNumber: number;
    /** Any discount applied (to an Order). */
    discount: number;
    /** the description on the order */
    description: string;
    /** Code used to redeem a discount. */
    discountCode: string;
    paymentStatus: FQl_dynamic_order_PaymentStatus;
    orderStatus: FQl_dynamic_order_OrderStatus;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_blogCategory_IBlogCategory {
    name: string;
    enName: string;
    icon?: string;
    description?: string;
    /** the last 50 post of each category, is kept here */
    blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_blogTag_IBlogTag {
    name: string;
    _id: string;
    updateAt?: Date;
    blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogComment and EmbeddedBlogComment.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_comment_IComment {
    repliedCommentIds?: string[];
    parentId?: string;
    blogPostId: string;
    _id: string;
    content: string;
    blogCommentStatus: FQl_dynamic_comment_CommentStatus;
    updateAt?: Date;
    user: FQl_dynamic_user_PuRelUser;
    blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
    repliedComments?: FQl_dynamic_comment_PuRelComment[];
}

export interface FQl_dynamic_comment_PuRelComment {
    _id: string;
    content: string;
    blogCommentStatus: FQl_dynamic_comment_CommentStatus;
    updateAt?: Date;
    user: string | FQl_dynamic_user_IUser;
    blogPost?: string | FQl_dynamic_blogPost_IBlogPost;
    repliedComments?: string | FQl_dynamic_comment_IComment[];
}

/**
 * @interface
 * inRelation BlogCategory: This is an interface for the relations of blogCategory that are kept in collection
 */
export interface FQl_dynamic_blogCategory_InBlogCategory {
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_dynamic_blogPost_PuBlogPost {
    title: string;
    summary: string;
    content: string;
    photo: string;
    totalViews?: number;
    totalComments?: number;
    totalLikes?: number;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_blogPost_EmBlogPost {
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection
 */
export interface FQl_dynamic_blogPost_InBlogPost {
    author?: FQl_dynamic_user_IUser;
    blogCategory: FQl_dynamic_blogCategory_IBlogCategory;
    blogTags?: FQl_dynamic_blogTag_IBlogTag[];
}

export interface FQl_dynamic_blogTag_PuRelBlogTag {
    name: string;
    _id: string;
    updateAt?: Date;
    blogPosts?: string[] | FQl_dynamic_blogPost_IBlogPost[];
}

/**
 * @interface
 * Embedded BlogTag: This is an interface for embedded fields in blogTag collection
 */
export interface FQl_dynamic_blogTag_EmBlogTag {
    blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * inRelation BlogTag: This is an interface for the relations of blogTag that are kept in collection
 */
export interface FQl_dynamic_blogTag_InBlogTag {
}

/**
 * @interface
 * PURE city: This is an interface for primitives types of city
 */
export interface FQl_dynamic_city_PuCity {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * Embedded city: This is an interface for embedded fields in city collection
 */
export interface FQl_dynamic_city_EmCity {
    state: FQl_dynamic_state_PuRelState;
    country: FQl_dynamic_country_PuRelCountry;
}

/**
 * @interface
 * inRelation city: This is an interface for the relations of blogTag that are kept in collection the number of these inRel doc are less than 1000
 */
export interface FQl_dynamic_city_InCity {
    state: FQl_dynamic_state_IState;
    country: FQl_dynamic_country_ICountry;
}

/**
 * @interface
 * Embedded BlogComment: This is an interface for embedded fields in blogComment collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_comment_EmComment {
    user: FQl_dynamic_user_PuRelUser;
    blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
    repliedComments?: FQl_dynamic_comment_PuRelComment[];
}

/**
 * @interface
 * inRelation BlogComment: This is an interface for the relations of blogComment that are kept in collection
 */
export interface FQl_dynamic_comment_InComment {
    /** this field is a relation of blogComment with itself, we have to keep an array of blog comments objectIds, the number may exceed from 1000 objectId, but because we have to keep the references this should be inner relation */
    repliedCommentIds: FQl_dynamic_comment_IComment;
    blogPostId: FQl_dynamic_blogPost_IBlogPost;
}

export interface FQl_dynamic_contactUs_PuContactUs {
    name: string;
    email: string;
    uploadedFiles: string[];
    message: string;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_contactUs_EmContactUs {
}

/**
 * @interface
 * inRelation contactUs: This is an interface for the relations of country that are kept in collection
 */
export interface FQl_dynamic_contactUs_InContactUs {
}

export interface FQl_dynamic_contactUs_IContactUs {
    name: string;
    email: string;
    uploadedFiles: string[];
    message: string;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * PURE country: This is an interface for primitives types of country
 */
export interface FQl_dynamic_country_PuCountry {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * Embedded country: This is an interface for embedded fields in country collection
 */
export interface FQl_dynamic_country_EmCountry {
    states?: FQl_dynamic_state_PuRelState[];
    cities?: FQl_dynamic_city_PuRelCity[];
}

/**
 * @interface
 * inRelation country: This is an interface for the relations of country that are kept in collection
 */
export interface FQl_dynamic_country_InCountry {
    state: FQl_dynamic_state_IState;
}

/**
 * @interface
 * PURE invoice: This is an interface for primitives types of blogPost
 */
export interface FQl_dynamic_invoice_PuInvoice {
    totalPrice: number;
    totalQuantity: number;
    discount: number;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_invoice_PuRelInvoice {
    totalPrice: number;
    totalQuantity: number;
    discount: number;
    _id: string;
    updateAt?: Date;
    /** any factor may include one/more that one orders */
    user: string | FQl_dynamic_user_IUser;
    wares: string | FQl_dynamic_ware_IWare;
}

/**
 * @interface
 * Embedded invoice: This is an interface for embedded fields in invoice collection
 */
export interface FQl_dynamic_invoice_EmInvoice {
    /** any factor may include one/more that one orders */
    user: FQl_dynamic_user_PuRelUser;
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
}

/**
 * @interface
 * inRelation invoice: This is an interface for the relations of invoice that are kept in collection
 */
export interface FQl_dynamic_invoice_InInvoice {
    wares: FQl_dynamic_ware_IWare[];
    user: FQl_dynamic_user_IUser;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_invoice_IInvoice {
    totalPrice: number;
    totalQuantity: number;
    discount: number;
    _id: string;
    updateAt?: Date;
    /** any factor may include one/more that one orders */
    user: FQl_dynamic_user_PuRelUser;
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
}

export interface FQl_dynamic_order_PuRelOrder {
    /** total price of all the ordered materials */
    totalPrice: number;
    /** totalQuantity of items ordered */
    totalQuantity: number;
    /** a confirmation code that send as a unique code to customer */
    confirmationNumber: number;
    /** Any discount applied (to an Order). */
    discount: number;
    /** the description on the order */
    description: string;
    /** Code used to redeem a discount. */
    discountCode: string;
    paymentStatus: FQl_dynamic_order_PaymentStatus;
    orderStatus: FQl_dynamic_order_OrderStatus;
    _id: string;
    updateAt?: Date;
    wares?: string | FQl_dynamic_ware_IWare;
    user?: string | FQl_dynamic_user_IUser;
}

export interface FQl_dynamic_order_EmOrder {
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
    user: FQl_dynamic_user_PuUser;
}

export interface FQl_dynamic_order_InOrder {
    wares: FQl_dynamic_ware_PuWare[];
    orderStatus: FQl_dynamic_order_OrderStatus;
    user: FQl_dynamic_user_PuUser;
}

export interface FQl_dynamic_ware_PuWare {
    name: string;
    brand: string;
    photos: string[];
    description: string;
    price: number;
    isDesigned: boolean;
    layers: [object];
    isPromotion: boolean;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_shop_PuShop {
    name: string;
    logo: string;
    address?: string;
    phone: number[];
    location?: { type: "Point"; coordinates: [number, number] };
    certificate: string;
    /** an array of social medias links and icons tuple */
    socialMedias: {
        instagram?: string;
        twitter?: string;
        telegram?: string;
        faceBook?: string;
        pinterest?: string;
        };
    aboutUs: string;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_shop_PuRelShop {
    name: string;
    logo: string;
    address?: string;
    phone: number[];
    location?: { type: "Point"; coordinates: [number, number] };
    certificate: string;
    /** an array of social medias links and icons tuple */
    socialMedias: {
        instagram?: string;
        twitter?: string;
        telegram?: string;
        faceBook?: string;
        pinterest?: string;
        };
    aboutUs: string;
    _id: string;
    updateAt?: Date;
    owner?: string | FQl_dynamic_user_IUser;
    city?: string | FQl_dynamic_city_ICity;
    state?: string | FQl_dynamic_state_IState;
    country?: string | FQl_dynamic_country_ICountry;
    wareTypes?: string | FQl_dynamic_wareType_IWareType[];
}

export interface FQl_dynamic_shop_EmShop {
    owner: FQl_dynamic_user_PuRelUser;
    city: FQl_dynamic_city_PuRelCity;
    state: FQl_dynamic_state_PuRelState;
    country: FQl_dynamic_country_PuRelCountry;
    wareTypes: FQl_dynamic_wareType_PuRelWareType[];
}

export interface FQl_dynamic_shop_InShop {
    wareTypes: FQl_dynamic_wareType_IWareType[];
    owner: FQl_dynamic_user_IUser;
}

export interface FQl_dynamic_shop_IShop {
    name: string;
    logo: string;
    address?: string;
    phone: number[];
    location?: { type: "Point"; coordinates: [number, number] };
    certificate: string;
    /** an array of social medias links and icons tuple */
    socialMedias: {
        instagram?: string;
        twitter?: string;
        telegram?: string;
        faceBook?: string;
        pinterest?: string;
        };
    aboutUs: string;
    _id: string;
    updateAt?: Date;
    owner: FQl_dynamic_user_PuRelUser;
    city: FQl_dynamic_city_PuRelCity;
    state: FQl_dynamic_state_PuRelState;
    country: FQl_dynamic_country_PuRelCountry;
    wareTypes: FQl_dynamic_wareType_PuRelWareType[];
}

export interface FQl_dynamic_shoppingCart_PuShoppingCart {
    totalPrice: number;
    totalQuantity: number;
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_shoppingCart_EmShoppingCart {
    user: FQl_dynamic_user_PuRelUser;
    wares: [
        {
          ware: FQl_dynamic_ware_PuRelWare;
          quantity: number;
          warePrice: number;
          description?: string;
        },
        ];
}

export interface FQl_dynamic_shoppingCart_InShoppingCart {
    wares: FQl_dynamic_ware_IWare[];
    user: FQl_dynamic_user_IUser;
}

/**
 * @interface
 * PURE state: This is an interface for primitives types of state
 */
export interface FQl_dynamic_state_PuState {
    name: string;
    enName: string;
    _id: string;
    updateAt?: Date;
}

/**
 * @interface
 * Embedded state: This is an interface for embedded fields in state collection
 */
export interface FQl_dynamic_state_EmState {
    country?: FQl_dynamic_country_PuRelCountry;
    cities?: FQl_dynamic_city_PuRelCity[];
}

/**
 * @interface
 * inRelation state: This is an interface for the relations of state that are kept in collection
 */
export interface FQl_dynamic_state_InState {
    country: FQl_dynamic_country_ICountry;
    cities: FQl_dynamic_city_ICity[];
}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_user_EmUser {
    addresses?: {
        country: FQl_dynamic_country_PuRelCountry;
        state: FQl_dynamic_state_PuRelState;
        city: FQl_dynamic_city_PuRelCity;
        addressTxt: string;
        };
    shoppingCart?: FQl_dynamic_shoppingCart_PuRelShoppingCart;
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection
 */
export interface FQl_dynamic_user_InUser {
    country: FQl_dynamic_country_ICountry;
    state: FQl_dynamic_state_IState;
    city: FQl_dynamic_city_ICity;
}

export interface FQl_dynamic_ware_EmWare {
    wareType: FQl_dynamic_wareType_PuRelWareType;
    /** the last 50 orders of this ware are kept inside the collection */
    orders: FQl_dynamic_order_PuOrder;
}

export interface FQl_dynamic_ware_InWare {
    wareType: FQl_dynamic_wareType_IWareType;
}

export interface FQl_dynamic_wareType_PuWareType {
    name: string;
    icon: string;
    description: string;
    /** it specifies if the wareType has studio */
    isDesignable: boolean;
    /**
     * if the WareType has studio,the studio features are specified here
     * it is optional because the wareType can
     */
    features?: FQl_dynamic_wareType_Features[];
    _id: string;
    updateAt?: Date;
}

export interface FQl_dynamic_wareType_EmWareType {
    /** the last 50 wares */
    wares?: FQl_dynamic_ware_PuRelWare;
}

export interface FQl_dynamic_wareType_InWareType {
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_static_types_BlogFirstPage {
    promotionBlogPosts: FQl_static_types_PromotionsBlogPosts[];
    latestBlogPosts: FQl_static_types_LatestBlogPosts[];
    popularBlogPosts: FQl_static_types_PoPularBlogPosts[];
}

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_static_types_PromotionsBlogPosts {
    _id: string;
    title: string;
    summary: string;
    photo: string;
    content: string;
    totalViews?: number;
    totalComments?: number;
    totalLikes?: number;
    updateAt?: Date;
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface FQl_static_types_LatestBlogPosts {
    _id: string;
    title: string;
    summary: string;
    blogCategoryName: string;
    authorName: string;
    totalComments: number;
    photo: string;
    content: string;
    totalViews?: number;
    totalLikes?: number;
    updateAt?: Date;
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}

/**
 * @interface
 * an interface for favorite/most Visited blogPosts that are showed in first page
 * these posts are favorite/most Visited  Posts
 * there are only 15 of them
 */
export interface FQl_static_types_PoPularBlogPosts {
    _id: string;
    title: string;
    photo: string;
    totalLikes: number;
    summary: string;
    content: string;
    totalViews?: number;
    totalComments?: number;
    updateAt?: Date;
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_static_types_ShopPage {
    shopWares: FQl_static_types_ShopWares[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_static_types_ShopWares {
    _id: string;
    name: string;
    photo: string;
    price: number;
    brand: string;
    photos: string[];
    description: string;
    isDesigned: boolean;
    layers: [object];
    isPromotion: boolean;
    updateAt?: Date;
    wareType: FQl_dynamic_wareType_PuRelWareType;
    /** the last 50 orders of this ware are kept inside the collection */
    orders: FQl_dynamic_order_PuOrder;
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_static_types_StoreHomePage {
    wareTypes: FQl_static_types_WareTypes[];
    promotionWares: FQl_static_types_PromotionWares[];
    storeLatestBlogPosts: FQl_static_types_StoreLatestBlogPosts[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_static_types_WareTypes {
    _id: string;
    name: string;
    icon: string;
    description: string;
    /** it specifies if the wareType has studio */
    isDesignable: boolean;
    /**
     * if the WareType has studio,the studio features are specified here
     * it is optional because the wareType can
     */
    features?: FQl_dynamic_wareType_Features[];
    updateAt?: Date;
    /** the last 50 wares */
    wares?: FQl_dynamic_ware_PuRelWare;
}

/**
 * @interface
 * an interface for wares that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_static_types_PromotionWares {
    _id: string;
    name: string;
    price: number;
    photos: string[];
    brand: string;
    description: string;
    isDesigned: boolean;
    layers: [object];
    isPromotion: boolean;
    updateAt?: Date;
    wareType: FQl_dynamic_wareType_PuRelWareType;
    /** the last 50 orders of this ware are kept inside the collection */
    orders: FQl_dynamic_order_PuOrder;
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in store first page
 * there are only 3 of them for the getting rest of them query to database is needed
 */
export interface FQl_static_types_StoreLatestBlogPosts {
    _id: string;
    title: string;
    summary: string;
    photo: string;
    content: string;
    totalViews?: number;
    totalComments?: number;
    totalLikes?: number;
    updateAt?: Date;
    /** user is partial because we don't need every user fields */
    author: FQl_dynamic_user_PuRelUser;
    /**
     * @property
     *  the blogCategory of the post
     */
    blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
    /**
     * @field
     *  the blogTags of the post
     */
    blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
    /**
     * @property
     *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
     */
    likedUsers?: FQl_dynamic_user_PuUser[];
    /**
     * @field
     *  just last 50 comments of the post,these 50 items are from outRelation interface
     */
    comments?: FQl_dynamic_comment_PuComment[];
}
