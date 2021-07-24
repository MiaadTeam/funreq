export interface FunQLResponseWithDetails {
  schema: {
    contents: {
      dynamic: {
        models: {
          User: {
            doits: {
              loginRequest: {
                details: { response: { ok?: boolean; phone?: number } };
              };
              login: { details: { response: FQl_response_login_LoginReturn } };
              insertProfileInfo: {
                details: { response: Partial<FQl_response_user_IUser> };
              };
              getUser: {
                details: { response: Partial<FQl_response_user_IUser> };
              };
              getUsers: {
                details: { response: Partial<FQl_response_user_IUser[]> };
              };
              updateUser: {
                details: { response: Partial<FQl_response_user_IUser> };
              };
              updateUserRole: {
                details: { response: Partial<FQl_response_user_IUser> };
              };
            };
          };
          Country: {
            doits: {
              createCountry: {
                details: { response: Partial<FQl_response_country_ICountry> };
              };
              updateCountry: {
                details: { response: Partial<FQl_response_country_ICountry> };
              };
              deleteCountry: {
                details: { response: Partial<FQl_response_country_ICountry> };
              };
              getCountry: {
                details: { response: Partial<FQl_response_country_ICountry> };
              };
              getCountries: {
                details: { response: Partial<FQl_response_country_ICountry>[] };
              };
            };
          };
          City: {
            doits: {
              createCity: {
                details: { response: Partial<FQl_response_city_ICity> };
              };
              updateCity: {
                details: { response: Partial<FQl_response_city_ICity> };
              };
              deleteCity: {
                details: { response: Partial<FQl_response_city_ICity> };
              };
              getCity: {
                details: { response: Partial<FQl_response_city_ICity> };
              };
              getCities: {
                details: { response: Partial<FQl_response_city_ICity>[] };
              };
            };
          };
          State: {
            doits: {
              updateState: {
                details: { response: Partial<FQl_response_state_IState> };
              };
              deleteState: {
                details: { response: Partial<FQl_response_state_IState> };
              };
              createState: {
                details: { response: Partial<FQl_response_state_IState> };
              };
              getState: {
                details: { response: Partial<FQl_response_state_IState> };
              };
              getStates: {
                details: { response: Partial<FQl_response_state_IState>[] };
              };
            };
          };
          BlogTag: {
            doits: {
              createBlogTag: {
                details: {
                  response: Partial<FQl_response_blogTag_IBlogTag> | object;
                };
              };
              updateBlogTag: {
                details: { response: Partial<FQl_response_blogTag_IBlogTag> };
              };
              deleteBlogTag: {
                details: { response: Partial<FQl_response_blogTag_IBlogTag> };
              };
              getBlogTag: {
                details: { response: Partial<FQl_response_blogPost_IBlogPost> };
              };
              getBlogTags: { details: { response: Partial<any[]> } };
            };
          };
          BlogCategory: {
            doits: {
              createBlogCategory: {
                details: {
                  response: Partial<FQl_response_blogCategory_IBlogCategory>;
                };
              };
              updateBlogCategory: {
                details: {
                  response:
                    | Partial<FQl_response_blogCategory_IBlogCategory>
                    | object;
                };
              };
              deleteBlogCategory: {
                details: {
                  response: Partial<FQl_response_blogCategory_IBlogCategory>;
                };
              };
              getBlogCategory: {
                details: {
                  response: Partial<FQl_response_blogCategory_IBlogCategory>;
                };
              };
              getBlogCategories: { details: { response: Partial<any[]> } };
            };
          };
          Comment: {
            doits: {
              createComment: {
                details: { response: Partial<FQl_response_comment_IComment> };
              };
              updateComment: {
                details: { response: Partial<FQl_response_comment_IComment> };
              };
              deleteComment: {
                details: { response: Partial<FQl_response_comment_IComment> };
              };
              getCommentReplies: {
                details: { response: Partial<FQl_response_comment_IComment[]> };
              };
              getComments: {
                details: { response: Partial<FQl_response_comment_IComment[]> };
              };
              getComment: {
                details: { response: Partial<FQl_response_comment_IComment> };
              };
            };
          };
          BlogPost: {
            doits: {
              createBlogPost: {
                details: { response: Partial<FQl_response_blogPost_IBlogPost> };
              };
              updateBlogPost: {
                details: { response: Partial<FQl_response_blogPost_IBlogPost> };
              };
              deleteBlogPost: {
                details: { response: Partial<FQl_response_blogPost_IBlogPost> };
              };
              getBlogPost: {
                details: {
                  response: Partial<FQl_response_blogPost_IBlogPost | object>;
                };
              };
              getBlogPosts: { details: { response: Partial<any[]> } };
              switchBlogPostLike: {
                details: { response: Partial<FQl_response_blogPost_IBlogPost> };
              };
              addToPromotions: {
                details: { response: FQl_response_types_PromotionsBlogPosts[] };
              };
            };
          };
          WareType: {
            doits: {
              getWareType: {
                details: { response: Partial<FQl_response_wareType_IWareType> };
              };
              createWareType: {
                details: { response: Partial<FQl_response_wareType_IWareType> };
              };
              deleteWareType: {
                details: { response: Partial<FQl_response_wareType_IWareType> };
              };
              getWareTypes: { details: { response: Partial<any[]> } };
              updateWareType: {
                details: { response: Partial<FQl_response_wareType_IWareType> };
              };
            };
          };
          Ware: {
            doits: {
              getWare: { details: { response: Partial<any[]> } };
              createWare: {
                details: { response: Partial<FQl_response_ware_IWare> };
              };
              updateWare: {
                details: {
                  response: Partial<FQl_response_ware_IWare | object>;
                };
              };
              deleteWare: {
                details: { response: Partial<FQl_response_ware_IWare> };
              };
              getWares: { details: { response: Partial<any[]> } };
            };
          };
          ShoppingCart: {
            doits: {
              addWareToShoppingCart: {
                details: {
                  response: Partial<FQl_response_shoppingCart_IShoppingCart>;
                };
              };
              getShoppingCart: {
                details: {
                  response: Partial<FQl_response_shoppingCart_IShoppingCart>;
                };
              };
              deleteWareOfShoppingCart: {
                details: {
                  response: Partial<FQl_response_shoppingCart_IShoppingCart>;
                };
              };
              changeQuantityInShoppingCart: {
                details: {
                  response: Partial<FQl_response_shoppingCart_IShoppingCart>;
                };
              };
            };
          };
          Order: {
            doits: {
              createOrder: {
                details: { response: FQl_response_order_IOrder | object };
              };
              updateOrder: {
                details: { response: Partial<FQl_response_order_IOrder> };
              };
              deleteWareOfOrder: {
                details: { response: FQl_response_order_IOrder | object };
              };
              deleteOrder: { details: { response: FQl_response_order_IOrder } };
              getOrder: {
                details: { response: Partial<FQl_response_order_IOrder> };
              };
              getOrders: { details: { response: Partial<any[]> } };
              changeQuantityOfWareInOrder: {
                details: { response: Partial<FQl_response_order_IOrder> };
              };
            };
          };
          Shop: {
            doits: {
              createShop: {
                details: { response: Partial<FQl_response_shop_IShop> };
              };
              updateShop: {
                details: { response: Partial<FQl_response_shop_IShop> };
              };
            };
          };
          ContactUs: {
            doits: {
              createContactUS: {
                details: {
                  response: Partial<FQl_response_contactUs_IContactUs | object>;
                };
              };
            };
          };
          Invoice: {
            doits: {
              createInvoiceFromOrder: {
                details: {
                  response: Partial<FQl_response_invoice_IInvoice> | object;
                };
              };
              createOffLineInvoice: {
                details: {
                  response: Partial<FQl_response_invoice_IInvoice> | object;
                };
              };
              addWareToInvoice: {
                details: { response: Partial<FQl_response_invoice_IInvoice> };
              };
              changeQuantityInInvoice: {
                details: { response: FQl_response_invoice_IInvoice };
              };
            };
          };
        };
      };
      static: {
        models: {
          BlogFirstPage: {
            doits: {
              getBlogFirstPage: {
                details: { response: FQl_response_types_BlogFirstPage };
              };
            };
          };
          StoreHomePage: {
            doits: {
              getStoreHomePage: {
                details: { response: FQl_response_types_StoreHomePage };
              };
            };
          };
          ShopPage: {
            doits: {
              getShopPage: {
                details: { response: FQl_response_types_ShopPage };
              };
            };
          };
        };
      };
    };
  };
}

export interface FunQLResponseWithoutDetails {
  schema: {
    contents: {
      dynamic: {
        models: {
          User: {
            doits: {
              loginRequest: { ok?: boolean; phone?: number };
              login: FQl_response_login_LoginReturn;
              insertProfileInfo: Partial<FQl_response_user_IUser>;
              getUser: Partial<FQl_response_user_IUser>;
              getUsers: Partial<FQl_response_user_IUser[]>;
              updateUser: Partial<FQl_response_user_IUser>;
              updateUserRole: Partial<FQl_response_user_IUser>;
            };
          };
          Country: {
            doits: {
              createCountry: Partial<FQl_response_country_ICountry>;
              updateCountry: Partial<FQl_response_country_ICountry>;
              deleteCountry: Partial<FQl_response_country_ICountry>;
              getCountry: Partial<FQl_response_country_ICountry>;
              getCountries: Partial<FQl_response_country_ICountry>[];
            };
          };
          City: {
            doits: {
              createCity: Partial<FQl_response_city_ICity>;
              updateCity: Partial<FQl_response_city_ICity>;
              deleteCity: Partial<FQl_response_city_ICity>;
              getCity: Partial<FQl_response_city_ICity>;
              getCities: Partial<FQl_response_city_ICity>[];
            };
          };
          State: {
            doits: {
              updateState: Partial<FQl_response_state_IState>;
              deleteState: Partial<FQl_response_state_IState>;
              createState: Partial<FQl_response_state_IState>;
              getState: Partial<FQl_response_state_IState>;
              getStates: Partial<FQl_response_state_IState>[];
            };
          };
          BlogTag: {
            doits: {
              createBlogTag: Partial<FQl_response_blogTag_IBlogTag> | object;
              updateBlogTag: Partial<FQl_response_blogTag_IBlogTag>;
              deleteBlogTag: Partial<FQl_response_blogTag_IBlogTag>;
              getBlogTag: Partial<FQl_response_blogPost_IBlogPost>;
              getBlogTags: Partial<any[]>;
            };
          };
          BlogCategory: {
            doits: {
              createBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>;
              updateBlogCategory:
                | Partial<FQl_response_blogCategory_IBlogCategory>
                | object;
              deleteBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>;
              getBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>;
              getBlogCategories: Partial<any[]>;
            };
          };
          Comment: {
            doits: {
              createComment: Partial<FQl_response_comment_IComment>;
              updateComment: Partial<FQl_response_comment_IComment>;
              deleteComment: Partial<FQl_response_comment_IComment>;
              getCommentReplies: Partial<FQl_response_comment_IComment[]>;
              getComments: Partial<FQl_response_comment_IComment[]>;
              getComment: Partial<FQl_response_comment_IComment>;
            };
          };
          BlogPost: {
            doits: {
              createBlogPost: Partial<FQl_response_blogPost_IBlogPost>;
              updateBlogPost: Partial<FQl_response_blogPost_IBlogPost>;
              deleteBlogPost: Partial<FQl_response_blogPost_IBlogPost>;
              getBlogPost: Partial<FQl_response_blogPost_IBlogPost | object>;
              getBlogPosts: Partial<any[]>;
              switchBlogPostLike: Partial<FQl_response_blogPost_IBlogPost>;
              addToPromotions: FQl_response_types_PromotionsBlogPosts[];
            };
          };
          WareType: {
            doits: {
              getWareType: Partial<FQl_response_wareType_IWareType>;
              createWareType: Partial<FQl_response_wareType_IWareType>;
              deleteWareType: Partial<FQl_response_wareType_IWareType>;
              getWareTypes: Partial<any[]>;
              updateWareType: Partial<FQl_response_wareType_IWareType>;
            };
          };
          Ware: {
            doits: {
              getWare: Partial<any[]>;
              createWare: Partial<FQl_response_ware_IWare>;
              updateWare: Partial<FQl_response_ware_IWare | object>;
              deleteWare: Partial<FQl_response_ware_IWare>;
              getWares: Partial<any[]>;
            };
          };
          ShoppingCart: {
            doits: {
              addWareToShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>;
              getShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>;
              deleteWareOfShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>;
              changeQuantityInShoppingCart: Partial<FQl_response_shoppingCart_IShoppingCart>;
            };
          };
          Order: {
            doits: {
              createOrder: FQl_response_order_IOrder | object;
              updateOrder: Partial<FQl_response_order_IOrder>;
              deleteWareOfOrder: FQl_response_order_IOrder | object;
              deleteOrder: FQl_response_order_IOrder;
              getOrder: Partial<FQl_response_order_IOrder>;
              getOrders: Partial<any[]>;
              changeQuantityOfWareInOrder: Partial<FQl_response_order_IOrder>;
            };
          };
          Shop: {
            doits: {
              createShop: Partial<FQl_response_shop_IShop>;
              updateShop: Partial<FQl_response_shop_IShop>;
            };
          };
          ContactUs: {
            doits: {
              createContactUS: Partial<
                FQl_response_contactUs_IContactUs | object
              >;
            };
          };
          Invoice: {
            doits: {
              createInvoiceFromOrder:
                | Partial<FQl_response_invoice_IInvoice>
                | object;
              createOffLineInvoice:
                | Partial<FQl_response_invoice_IInvoice>
                | object;
              addWareToInvoice: Partial<FQl_response_invoice_IInvoice>;
              changeQuantityInInvoice: FQl_response_invoice_IInvoice;
            };
          };
        };
      };
      static: {
        models: {
          BlogFirstPage: {
            doits: { getBlogFirstPage: FQl_response_types_BlogFirstPage };
          };
          StoreHomePage: {
            doits: { getStoreHomePage: FQl_response_types_StoreHomePage };
          };
          ShopPage: { doits: { getShopPage: FQl_response_types_ShopPage } };
        };
      };
    };
  };
}

export interface FQl_response_login_LoginReturn {
  user?: FQl_response_user_IUser;
  token?: string;
}

export interface FQl_response_user_IUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_response_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_response_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  _id: string;
  updateAt?: Date;
  addresses?: {
    country: FQl_response_country_PuRelCountry;
    state: FQl_response_state_PuRelState;
    city: FQl_response_city_PuRelCity;
    addressTxt: string;
  };
  shoppingCart?: FQl_response_shoppingCart_PuRelShoppingCart;
}

export enum FQl_response_user_Gender {
  Male = "Male",
  Female = "Female",
}

export enum FQl_response_user_Level {
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
  Ghost = "Ghost",
}

export interface FQl_response_country_PuRelCountry {
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
  states?: string | FQl_response_state_IState[];
  cities?: string | FQl_response_city_ICity[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_state_IState {
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
  country?: FQl_response_country_PuRelCountry;
  cities?: FQl_response_city_PuRelCity[];
}

export interface FQl_response_city_PuRelCity {
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
  state?: string | FQl_response_state_IState;
  country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_country_ICountry {
  states?: FQl_response_state_PuRelState[];
  cities?: FQl_response_city_PuRelCity[];
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
}

export interface FQl_response_state_PuRelState {
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
  cities?: string[] | FQl_response_city_ICity[];
  country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_city_ICity {
  state: FQl_response_state_PuRelState;
  country: FQl_response_country_PuRelCountry;
  name: string;
  enName: string;
  _id: string;
  updateAt?: Date;
}

export interface FQl_response_shoppingCart_PuRelShoppingCart {
  totalPrice: number;
  totalQuantity: number;
  _id: string;
  updateAt?: Date;
  user: string | FQl_response_user_IUser;
  wares: string | FQl_response_ware_IWare[];
}

export interface FQl_response_ware_IWare {
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
  wareType: FQl_response_wareType_PuRelWareType;
  /** the last 50 orders of this ware are kept inside the collection */
  orders: FQl_response_order_PuOrder;
}

export interface FQl_response_wareType_PuRelWareType {
  name: string;
  icon: string;
  description: string;
  /** it specifies if the wareType has studio */
  isDesignable: boolean;
  /**
   * if the WareType has studio,the studio features are specified here
   * it is optional because the wareType can
   */
  features?: FQl_response_wareType_Features[];
  _id: string;
  updateAt?: Date;
  /** the last 50 wares */
  wares?: string | FQl_response_ware_IWare;
}

export enum FQl_response_wareType_Features {
  Emoji = "Emoji",
  Text = "Text",
  RepeatPattern = "RepeatPattern",
  Color = "Color",
  Pic = "Pic",
  HandWriting = "HandWriting",
  Layers = "Layers",
}

export interface FQl_response_order_PuOrder {
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
  paymentStatus: FQl_response_order_PaymentStatus;
  orderStatus: FQl_response_order_OrderStatus;
  _id: string;
  updateAt?: Date;
}

export enum FQl_response_order_PaymentStatus {
  Paid = "PAID",
  NotPaid = "NOTPAID",
}

export enum FQl_response_order_OrderStatus {
  /** cancelled by store */
  Rejected = "REJECTED",
  Processing = "PROCESSING",
  Delivered = "DELIVERED",
  /** cancelled by user */
  Canceled = "CANCELED",
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_blogTag_IBlogTag {
  name: string;
  _id: string;
  updateAt?: Date;
  blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
}

export interface FQl_response_blogPost_PuRelBlogPost {
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
  author: string | FQl_response_user_IUser;
  /**
   * @field
   * the relation for blogCategory in the blogPost,
   * the objectId should be kept in here,
   * the return type should be from IBlogCategory schema
   */
  blogCategory: string | FQl_response_blogCategory_IBlogCategory;
  /**
   * @field
   * the relation for blogTag in the blogPost,
   * the array of objectIds should be kept in here,
   * the return type should be from IBlogTag schema
   */
  blogTags?: string[] | FQl_response_blogTag_IBlogTag[];
  /**
   * @field
   * the relation for likedUsers in the blogPost,
   * (just the 50 last users who liked the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema
   */
  likedUsers?: string[] | FQl_response_user_IUser[];
  /**
   * @field
   * the relation for comments in the blogPost,
   * (just the 50 last comments of the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema
   */
  comments?: string[] | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogCategory_IBlogCategory {
  name: string;
  enName: string;
  icon?: string;
  description?: string;
  /** the last 50 post of each category, is kept here */
  blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
  _id: string;
  updateAt?: Date;
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogComment and EmbeddedBlogComment.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_comment_IComment {
  repliedCommentIds?: string[];
  parentId?: string;
  blogPostId: string;
  _id: string;
  content: string;
  blogCommentStatus: FQl_response_comment_CommentStatus;
  updateAt?: Date;
  user: FQl_response_user_PuRelUser;
  blogPost?: FQl_response_blogPost_PuRelBlogPost;
  repliedComments?: FQl_response_comment_PuRelComment[];
}

export enum FQl_response_comment_CommentStatus {
  ACCEPT,
  PENDING,
  REJECT,
}

export interface FQl_response_user_PuRelUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_response_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_response_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  _id: string;
  updateAt?: Date;
  country?: string | FQl_response_country_ICountry;
  state?: string | FQl_response_state_IState;
  city?: string | FQl_response_city_ICity;
  shoppingCart?: string | FQl_response_shoppingCart_IShoppingCart;
}

export interface FQl_response_shoppingCart_IShoppingCart {
  totalPrice: number;
  totalQuantity: number;
  _id: string;
  updateAt?: Date;
  user: FQl_response_user_PuRelUser;
  wares: [
    {
      ware: FQl_response_ware_PuRelWare;
      quantity: number;
      warePrice: number;
      description?: string;
    },
  ];
}

export interface FQl_response_ware_PuRelWare {
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
  wareType?: string | FQl_response_wareType_IWareType;
  /** the last 50 orders of this ware are kept inside the collection */
  orders?: string | FQl_response_order_IOrder;
}

export interface FQl_response_wareType_IWareType {
  name: string;
  icon: string;
  description: string;
  /** it specifies if the wareType has studio */
  isDesignable: boolean;
  /**
   * if the WareType has studio,the studio features are specified here
   * it is optional because the wareType can
   */
  features?: FQl_response_wareType_Features[];
  _id: string;
  updateAt?: Date;
  /** the last 50 wares */
  wares?: FQl_response_ware_PuRelWare;
}

export interface FQl_response_order_IOrder {
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
  paymentStatus: FQl_response_order_PaymentStatus;
  orderStatus: FQl_response_order_OrderStatus;
  _id: string;
  updateAt?: Date;
  wares: [
    {
      ware: FQl_response_ware_PuRelWare;
      quantity: number;
      warePrice: number;
      description?: string;
    },
  ];
  user: FQl_response_user_PuUser;
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_response_user_PuUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_response_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_response_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  _id: string;
  updateAt?: Date;
}

export interface FQl_response_comment_PuRelComment {
  _id: string;
  content: string;
  blogCommentStatus: FQl_response_comment_CommentStatus;
  updateAt?: Date;
  user: string | FQl_response_user_IUser;
  blogPost?: string | FQl_response_blogPost_IBlogPost;
  repliedComments?: string | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogPost_IBlogPost {
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
  author: FQl_response_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_response_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_response_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_response_comment_PuComment[];
}

export interface FQl_response_blogCategory_PuRelBlogCategory {
  name: string;
  enName: string;
  icon?: string;
  description?: string;
  blogPosts?: string[] | FQl_response_blogPost_IBlogPost[];
}

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag
 */
export interface FQl_response_blogTag_PuBlogTag {
  name: string;
  _id: string;
  updateAt?: Date;
}

/**
 * @interface
 * PURE blogComment: This is an interface for primitives types of blogComment
 */
export interface FQl_response_comment_PuComment {
  _id: string;
  content: string;
  blogCommentStatus: FQl_response_comment_CommentStatus;
  updateAt?: Date;
}

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_response_types_PromotionsBlogPosts {
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
  author: FQl_response_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_response_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_response_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_response_comment_PuComment[];
}

export interface FQl_response_shop_IShop {
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
  owner: FQl_response_user_PuRelUser;
  city: FQl_response_city_PuRelCity;
  state: FQl_response_state_PuRelState;
  country: FQl_response_country_PuRelCountry;
  wareTypes: FQl_response_wareType_PuRelWareType[];
}

export interface FQl_response_contactUs_IContactUs {
  name: string;
  email: string;
  uploadedFiles: string[];
  message: string;
  _id: string;
  updateAt?: Date;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_invoice_IInvoice {
  totalPrice: number;
  totalQuantity: number;
  discount: number;
  _id: string;
  updateAt?: Date;
  /** any factor may include one/more that one orders */
  user: FQl_response_user_PuRelUser;
  wares: [
    {
      ware: FQl_response_ware_PuRelWare;
      quantity: number;
      warePrice: number;
      description?: string;
    },
  ];
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_BlogFirstPage {
  promotionBlogPosts: FQl_response_types_PromotionsBlogPosts[];
  latestBlogPosts: FQl_response_types_LatestBlogPosts[];
  popularBlogPosts: FQl_response_types_PoPularBlogPosts[];
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_LatestBlogPosts {
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
  author: FQl_response_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_response_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_response_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_response_comment_PuComment[];
}

/**
 * @interface
 * an interface for favorite/most Visited blogPosts that are showed in first page
 * these posts are favorite/most Visited  Posts
 * there are only 15 of them
 */
export interface FQl_response_types_PoPularBlogPosts {
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
  author: FQl_response_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_response_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_response_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_response_comment_PuComment[];
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_StoreHomePage {
  wareTypes: FQl_response_types_WareTypes[];
  promotionWares: FQl_response_types_PromotionWares[];
  storeLatestBlogPosts: FQl_response_types_StoreLatestBlogPosts[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_response_types_WareTypes {
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
  features?: FQl_response_wareType_Features[];
  updateAt?: Date;
  /** the last 50 wares */
  wares?: FQl_response_ware_PuRelWare;
}

/**
 * @interface
 * an interface for wares that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_response_types_PromotionWares {
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
  wareType: FQl_response_wareType_PuRelWareType;
  /** the last 50 orders of this ware are kept inside the collection */
  orders: FQl_response_order_PuOrder;
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in store first page
 * there are only 3 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_StoreLatestBlogPosts {
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
  author: FQl_response_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_response_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_response_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_response_comment_PuComment[];
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_ShopPage {
  shopWares: FQl_response_types_ShopWares[];
}

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface FQl_response_types_ShopWares {
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
  wareType: FQl_response_wareType_PuRelWareType;
  /** the last 50 orders of this ware are kept inside the collection */
  orders: FQl_response_order_PuOrder;
}
