export interface FunQLRequest {
 schema: {
  contents: {
   dynamic: {
    models: {
     User: {
      doits: {
       loginRequest: {
        details: {
         set: {
          phone: number
         },
         get?: {
          ok?: 0 | 1,
          phone?: 0 | 1
         }
        }
       },
       login: {
        details: {
         set: {
          phone: number,
          code: string
         },
         get?: {
          user: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            }
           }
          },
          token?: 0 | 1
         }
        }
       },
       insertProfileInfo: {
        details: {
         set: {
          name: string,
          lastName: string,
          gender: 'MALE' | 'FEMALE',
          birthDate?: any,
          password: string,
          postalCode?: string,
          email: any,
          creditCardNumber?: number
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       getUser: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           }
          }
         }
        }
       },
       getUsers: {
        details: {
         set: {
          name?: string,
          lastName?: string,
          level?: 'Admin' | 'Normal' | 'Editor' | 'Author' | 'Ghost'
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          }
         }
        }
       },
       updateUser: {
        details: {
         set: {
          userId: string,
          name: string,
          lastName: string,
          gender: 'MALE' | 'FEMALE',
          birthDate?: any,
          postalCode?: string,
          email: any,
          creditCardNumber?: number,
          addresses?: {
           country: string,
           state: string,
           city: string,
           addressTxt: string
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       updateUserRole: {
        details: {
         set: {
          _id: string,
          role: 'Admin' | 'Normal' | 'Editor'
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Country: {
      doits: {
       createCountry: {
        details: {
         set: {
          name: string,
          enName: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       updateCountry: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       deleteCountry: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCountry: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          cities?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          }
         }
        }
       },
       getCountries: {
        details: any
       }
      }
     },
     City: {
      doits: {
       createCity: {
        details: {
         set: {
          name: string,
          enName: string,
          stateId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          city?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       updateCity: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          stateId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          city?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       deleteCity: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCity: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          city?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          }
         }
        }
       },
       getCities: {
        details: any
       }
      }
     },
     State: {
      doits: {
       updateState: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          countryId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       deleteState: {
        details: {
         set: {
          _id: string
         }
        }
       },
       createState: {
        details: {
         set: {
          name: string,
          enName: string,
          countryId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       getState: {
        details: any
       },
       getStates: {
        details: any
       }
      }
     },
     BlogTag: {
      doits: {
       createBlogTag: {
        details: {
         set: {
          name: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       updateBlogTag: {
        details: {
         set: {
          _id?: any,
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            iconUrl?: 0 | 1,
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogTags: {
        details: any
       }
      }
     },
     BlogCategory: {
      doits: {
       createBlogCategory: {
        details: {
         set: {
          name: string,
          enName: string,
          icon: string,
          description: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       updateBlogCategory: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          icon?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       deleteBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            iconUrl?: 0 | 1,
            description?: 0 | 1
           }
          }
         }
        }
       },
       getBlogCategories: {
        details: {
         set: {
          name?: string,
          enName?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            iconUrl?: 0 | 1,
            description?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Comment: {
      doits: {
       createComment: {
        details: {
         set: {
          content: string,
          blogPostId: string,
          blogCommentStatus: 'ACCEPT' | 'PENDING' | 'REJECT',
          parentId?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          blogCommentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1
          }
         }
        }
       },
       updateComment: {
        details: {
         set: {
          _id?: string,
          BlogCommentStatus: 'ACCEPT' | 'PENDING' | 'REJECT'
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          iconUrl?: 0 | 1,
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            iconUrl?: 0 | 1,
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteComment: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          blogCommentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1
          }
         }
        }
       },
       getCommentReplies: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          blogCommentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1
          }
         }
        }
       },
       getComments: {
        details: any
       },
       getComment: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          blogCommentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: 0 | 1,
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1
          }
         }
        }
       }
      }
     },
     BlogPost: {
      doits: {
       createBlogPost: {
        details: {
         set: {
          title: string,
          summary: string,
          content: string,
          photo: string,
          blogCategoryID: string,
          blogTagIDs: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: 0 | 1,
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           iconUrl?: 0 | 1,
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       updateBlogPost: {
        details: {
         set: {
          _id?: string,
          title?: string,
          summary?: string,
          content?: string,
          photo?: string,
          blogCategoryID?: string,
          blogTagIDs?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: 0 | 1,
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           iconUrl?: 0 | 1,
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogPost: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: 0 | 1,
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           iconUrl?: 0 | 1,
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       getBlogPost: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: 0 | 1,
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          blogTags?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          blogCategory?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           iconUrl?: 0 | 1,
           description?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            addresses?: {
             country?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            }
           }
          }
         }
        }
       },
       getBlogPosts: {
        details: any
       },
       switchBlogPostLike: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: 0 | 1,
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           blogCommentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            blogCommentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           iconUrl?: 0 | 1,
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: 0 | 1,
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       addToPromotions: {
        details: {
         set: {
          _id?: string
         }
        }
       }
      }
     },
     WareType: {
      doits: {
       getWareType: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: 0 | 1,
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       createWareType: {
        details: {
         set: {
          name: string,
          icon: string,
          description: string,
          isDesignable: boolean,
          features?: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: 0 | 1,
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       deleteWareType: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1
          }
         }
        }
       },
       getWareTypes: {
        details: {
         set: {
          name?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: 0 | 1,
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1
           }
          }
         }
        }
       },
       updateWareType: {
        details: {
         set: {
          _id?: string,
          name?: string,
          icon?: string,
          description?: string,
          features: any
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: 0 | 1,
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Ware: {
      doits: {
       getWare: {
        details: {
         set: {
          name?: string,
          brand?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          }
         }
        }
       },
       createWare: {
        details: {
         set: {
          name: string,
          brand: string,
          description: string,
          photos?: any,
          wareTypeId: string,
          price: number,
          isDesigned: boolean,
          isPromotion: boolean,
          layers?: { pic?: { propType: string, width: number, height: number, path: string, position: { x: number, y: number }, rotate?: 90 | 180 | 270, picRepeat?: { path: string, width: number, height: number, repeatType: 'type1' | 'type2' | 'type3' | 'type4' } }, handWriting?: { propType: string, width: number, height: number, path: string, position: any, color: string, size: 1 | 2 | 3 | 4 | 5 | 6 }, color?: string, text?: { propType: string, position: { x: number, y: number }, font: string, size: number, color: string, effect: 'italic' | 'bold' | 'underline', align: 'left' | 'right' | 'center' | 'justify', rotate: 90 | 180 | 270 }, emoji?: { propType: string, width: number, height: number, emojis: string, color: string, rotate: 90 | 180 | 270 } }[]
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1
          }
         }
        }
       },
       updateWare: {
        details: {
         set: {
          _id?: string,
          name?: string,
          brand?: string,
          photos?: any,
          isPromotion: boolean,
          layers?: { pic?: { width: number, height: number, path: string, position: { x: number, y: number }, rotate?: 90 | 180 | 270, picRepeat?: { path: string, width: number, height: number, repeatType: 'type1' | 'type2' | 'type3' | 'type4' } }, handWriting?: { width: number, height: number, path: string, position: any, color: string, size: 1 | 2 | 3 | 4 | 5 | 6 }, color?: string, text?: { position: { x: number, y: number }, font: string, size: number, color: string, effect: 'italic' | 'bold' | 'underline', align: 'left' | 'right' | 'center' | 'justify', rotate: 90 | 180 | 270 }, emoji?: { width: number, height: number, emojis: string, color: string, rotate: 90 | 180 | 270 }[] }[]
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          }
         }
        }
       },
       deleteWare: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1
          }
         }
        }
       },
       getWares: {
        details: {
         set: {
          name?: string,
          brand?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: 0 | 1,
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          },
          orders?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1
           },
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     ShoppingCart: {
      doits: {
       addWareToShoppingCart: {
        details: {
         set: {
          wareId: string,
          quantity: number,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       getShoppingCart: {
        details: {
         set: any,
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             city?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           }
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1,
            wares?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: 0 | 1,
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: 0 | 1,
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1
             }
            }
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             addresses?: {
              country?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              state?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            wares?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: 0 | 1,
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: 0 | 1,
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1
             }
            }
           }
          }
         }
        }
       },
       deleteWareOfShoppingCart: {
        details: {
         set: {
          shoppingCartId: string,
          wareId: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1
           }
          }
         }
        }
       },
       changeQuantityInShoppingCart: {
        details: {
         set: {
          shoppingCartId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       }
      }
     },
     Order: {
      doits: {
       createOrder: {
        details: {
         set: {
          shoppingCartId: string,
          description?: string,
          orderStatus: 'REJECTED' | 'PROCESSING' | 'DELIVERED' | 'CANCELED' | 'InTRANSIT' | 'RETURNED',
          paymentStatus: 'PAID' | 'NOTPAID'
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       updateOrder: {
        details: {
         set: {
          orderId: string,
          description?: string,
          paymentStatus?: 'PAID' | 'NOTPAID',
          OrderStatus?: 'REJECTED' | 'PROCESSING' | 'DELIVERED' | 'CANCELED' | 'InTRANSIT' | 'RETURNED',
          totalPrice?: number,
          totalQuantity?: number
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       deleteWareOfOrder: {
        details: {
         set: {
          orderId: string,
          wareId: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       deleteOrder: {
        details: {
         set: {
          orderId: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       getOrder: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1
           }
          }
         }
        }
       },
       getOrders: {
        details: {
         set: {
          wareIds?: any,
          paymentStatus?: string,
          orderStatus?: string,
          userId?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           }
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: 0 | 1,
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1
           }
          }
         }
        }
       },
       changeQuantityOfWareInOrder: {
        details: {
         set: {
          orderId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       }
      }
     },
     Shop: {
      doits: {
       createShop: {
        details: {
         set: {
          name: string,
          logo?: string,
          address?: string,
          phone?: number,
          location?: [
           any,
           any
          ],
          certificate?: string,
          socialMedias?: {
           instagram: string,
           twitter: string,
           telegram: string,
           faceBook: string,
           pinterest: string
          }
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          address?: 0 | 1
         }
        }
       },
       updateShop: {
        details: {
         set: {
          _id?: any,
          name?: string,
          logo?: string,
          address?: string,
          phone?: number,
          location?: [
           any,
           any
          ],
          certificate?: string,
          socialMedias?: {
           instagram?: string,
           twitter?: string,
           telegram?: string,
           faceBook?: string,
           pinterest?: string
          }
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          address?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          state?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          wareTypes?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: 0 | 1,
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: 0 | 1,
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     ContactUs: {
      doits: {
       createContactUS: {
        details: any
       }
      }
     },
     Invoice: {
      doits: {
       createInvoiceFromOrder: {
        details: {
         set: {
          orderId?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       createOffLineInvoice: {
        details: {
         set: {
          name: string,
          lastName: string,
          phone: number,
          address?: {
           country: string,
           state: string,
           city: string,
           addressTxt: string
          }
         }
        }
       },
       addWareToInvoice: {
        details: {
         set: {
          invoiceId: string,
          wareId: string,
          quantity: number,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       },
       changeQuantityInInvoice: {
        details: {
         set: {
          invoiceId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1
          },
          wares?: {
           _id?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: 0 | 1,
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1
          }
         }
        }
       }
      }
     }
    }
   },
   static: {
    models: {
     BlogFirstPage: {
      doits: {
       getBlogFirstPage: {
        details: {
         set: any,
         get?: any
        }
       }
      }
     },
     StoreHomePage: {
      doits: {
       getStoreHomePage: {
        details: {
         set: any,
         get?: any
        }
       }
      }
     },
     ShopPage: {
      doits: {
       getShopPage: {
        details: {
         set: any,
         get?: any
        }
       }
      }
     }
    }
   }
  }
 };
}