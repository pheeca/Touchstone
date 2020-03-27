let query = `CREATE TABLE [ConsumptionType_d304157bf7a3446caf2910576b88495f]([ConsumptionTypeId] int IDENTITY(1,1) NOT NULL, 
[ConsumptionType] nvarchar(50)  NULL, 
 CONSTRAINT [9b34906f-a76b-4e7d-962f-62aa25bfa013ConsumptionTypeId_IsUnique] UNIQUE(ConsumptionTypeId),CONSTRAINT [9b34906f-a76b-4e7d-962f-62aa25bfa013ConsumptionTypeId_IsPrimary] primary key (ConsumptionTypeId))  
GO
CREATE TABLE [RBUnitStatus_981bf31f037d4114a079c907614fc677]([RBUnitStatusId] int IDENTITY(1,1) NOT NULL, 
[RBUnitStatus] nvarchar(50)  NULL, 
 CONSTRAINT [a1b54fb6-f75a-456d-b5e5-941fcd690803RBUnitStatusId_IsUnique] UNIQUE(RBUnitStatusId),CONSTRAINT [a1b54fb6-f75a-456d-b5e5-941fcd690803RBUnitStatusId_IsPrimary] primary key (RBUnitStatusId))  
GO
CREATE TABLE [ContactType_a611fa5acbe44865821c669b46b37100]([ContTypeId] int IDENTITY(1,1) NOT NULL, 
[ContType] nvarchar(50)  NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[CreatedOn] datetime  NULL, 
[ModiefiedOn] datetime  NULL, 
 CONSTRAINT [0c6d2bd5-5cbd-41e8-a170-a7515709c55cContTypeId_IsUnique] UNIQUE(ContTypeId),CONSTRAINT [0c6d2bd5-5cbd-41e8-a170-a7515709c55cContTypeId_IsPrimary] primary key (ContTypeId))  
GO
CREATE TABLE [RepeatativeType_6b6a389c1cdf492c881e92b2484e9068]([RepeatativeTypeId] int IDENTITY(1,1) NOT NULL, 
[RepeatativeType] nvarchar(50)  NOT NULL, 
[DisplayText] nvarchar(50)  NULL, 
 CONSTRAINT [dcc17014-f18e-4a8f-a640-4602fa7918c5RepeatativeTypeId_IsUnique] UNIQUE(RepeatativeTypeId),CONSTRAINT [dcc17014-f18e-4a8f-a640-4602fa7918c5RepeatativeTypeId_IsPrimary] primary key (RepeatativeTypeId))  
GO
CREATE TABLE [Restaurant_618c0bf8e7a649d8ad00d6c9c82f4be5]([RId] int IDENTITY(1,1) NOT NULL, 
[RName] nvarchar(50)  NULL, 
[RURL] nvarchar(50)  NULL, 
[RStatusId] int  NULL, 
[RestaurantLink] nvarchar(50)  NULL, 
[CreatedOn] datetime  NULL, 
[ModifiedOn] datetime  NULL, 
 CONSTRAINT [2aaeb7f3-1402-408d-9a43-8a6aed9dc096RId_IsUnique] UNIQUE(RId),CONSTRAINT [2aaeb7f3-1402-408d-9a43-8a6aed9dc096RId_IsPrimary] primary key (RId))  
GO
CREATE TABLE [DealGenre_7100da0d0fbb48ebb4bd68caf5b84707]([DealGenreId] int IDENTITY(1,1) NOT NULL, 
[DealGenreName] nvarchar(50)  NULL, 
 CONSTRAINT [a68fc26b-07f8-40dd-95cf-4df92afbf7c6DealGenreId_IsUnique] UNIQUE(DealGenreId),CONSTRAINT [a68fc26b-07f8-40dd-95cf-4df92afbf7c6DealGenreId_IsPrimary] primary key (DealGenreId))  
GO
CREATE TABLE [DealStatus_9823ihbf9842yrofh98234tbfg8374gb8o3g]([DealStatusId] int IDENTITY(1,1) NOT NULL, 
[DealStatus] nvarchar(50)  NULL, 
 CONSTRAINT [314e818f-341d-470d-9752-f04654773687DealStatusId_IsUnique] UNIQUE(DealStatusId),CONSTRAINT [314e818f-341d-470d-9752-f04654773687DealStatusId_IsPrimary] primary key (DealStatusId))  
GO
CREATE TABLE [DeliveryArea]([DeliveryAreaId] int IDENTITY(1,1) NOT NULL, 
[RBID] int  NULL, 
[AreaName] nvarchar(50)  NULL, 
[AreaCharges] decimal  NULL, 
 CONSTRAINT [3f27a22e-d4c1-4cee-b840-ad3ae83b1f33DeliveryAreaId_IsUnique] UNIQUE(DeliveryAreaId),CONSTRAINT [3f27a22e-d4c1-4cee-b840-ad3ae83b1f33DeliveryAreaId_IsPrimary] primary key (DeliveryAreaId))  
GO
CREATE TABLE [RStatus_9ffbe364d37e43ec9cb668dab303b9a1]([RStatusId] int IDENTITY(1,1) NOT NULL, 
[RStatus] nvarchar(50)  NOT NULL, 
 CONSTRAINT [3c8a0627-2c3f-466a-891e-e73bd947cb01RStatusId_IsUnique] UNIQUE(RStatusId),CONSTRAINT [3c8a0627-2c3f-466a-891e-e73bd947cb01RStatusId_IsPrimary] primary key (RStatusId))  
GO
CREATE TABLE [Designation_dd854018789d47afa8a4426db0ff2608]([DesignationId] int IDENTITY(1,1) NOT NULL, 
[Designation] nvarchar(50)  NOT NULL, 
 CONSTRAINT [a4377460-99d2-4f3b-8e9c-ef98f480d4cbDesignationId_IsUnique] UNIQUE(DesignationId),CONSTRAINT [a4377460-99d2-4f3b-8e9c-ef98f480d4cbDesignationId_IsPrimary] primary key (DesignationId))  
GO
CREATE TABLE [ServingType_02efe1c7a0814c02a286d861aeff7eec]([ServingTypeId] int IDENTITY(1,1) NOT NULL, 
[ServingTypeName] nvarchar(50)  NULL, 
 CONSTRAINT [3e16cc4a-e450-461c-9525-40f672b12429ServingTypeId_IsUnique] UNIQUE(ServingTypeId),CONSTRAINT [3e16cc4a-e450-461c-9525-40f672b12429ServingTypeId_IsPrimary] primary key (ServingTypeId))  
GO
CREATE TABLE [DishStatus_9w8476jsbdifuyulwry98]([DishStatusId] int IDENTITY(1,1) NOT NULL, 
[DishStatus] nvarchar(50)  NOT NULL, 
 CONSTRAINT [8dcc8824-49d4-4825-948b-00a9fc05a429DishStatusId_IsUnique] UNIQUE(DishStatusId),CONSTRAINT [8dcc8824-49d4-4825-948b-00a9fc05a429DishStatusId_IsPrimary] primary key (DishStatusId))  
GO
CREATE TABLE [Status_4cbc40a9b3c9448fae255af326f5632d]([StatusId] int IDENTITY(1,1) NOT NULL, 
[Status] nchar(10)  NULL, 
 CONSTRAINT [f1be0b27-137c-4f4b-bf82-08a08dc211e0StatusId_IsUnique] UNIQUE(StatusId),CONSTRAINT [f1be0b27-137c-4f4b-bf82-08a08dc211e0StatusId_IsPrimary] primary key (StatusId))  
GO
CREATE TABLE [FixedMasterAccounts]([FMAId] int IDENTITY(1,1) NOT NULL, 
[FAName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [7a7908a9-5835-40cb-a2a4-868c8ab52f35FMAId_IsUnique] UNIQUE(FMAId),CONSTRAINT [7a7908a9-5835-40cb-a2a4-868c8ab52f35FMAId_IsPrimary] primary key (FMAId))  
GO
CREATE TABLE [TableStatus_cdce1a8fe1a143899ec52c314dbb5611]([TableStatusId] int IDENTITY(1,1) NOT NULL, 
[TableStatus] nvarchar(50)  NULL, 
 CONSTRAINT [ab6e98ef-0b6c-4e77-a2c1-1e41f829a167TableStatusId_IsUnique] UNIQUE(TableStatusId),CONSTRAINT [ab6e98ef-0b6c-4e77-a2c1-1e41f829a167TableStatusId_IsPrimary] primary key (TableStatusId))  
GO
CREATE TABLE [FloorStatus_a467bbe004344bf0a3dae59e1053d369]([FloorStatusId] int IDENTITY(1,1) NOT NULL, 
[FloorStatus] nvarchar(50)  NULL, 
 CONSTRAINT [bbaec0ff-526e-4d73-ba57-1208737adc38FloorStatusId_IsUnique] UNIQUE(FloorStatusId),CONSTRAINT [bbaec0ff-526e-4d73-ba57-1208737adc38FloorStatusId_IsPrimary] primary key (FloorStatusId))  
GO
CREATE TABLE [TableType]([TableTypeId] int IDENTITY(1,1) NOT NULL, 
[Name] nvarchar(50)  NULL, 
[TableImage] nvarchar(50)  NULL, 
[SupportsParallelOrders] bit  NOT NULL, 
[DisplayName] nvarchar(50)  NULL, 
 CONSTRAINT [64264b84-a1ec-4af0-9f5f-17e876c7ba1dTableTypeId_IsUnique] UNIQUE(TableTypeId),CONSTRAINT [64264b84-a1ec-4af0-9f5f-17e876c7ba1dTableTypeId_IsPrimary] primary key (TableTypeId))  
GO
CREATE TABLE [FoodType_ab4ce47fb93040bd97c5d9fdbf848408]([FoodTypeId] int IDENTITY(1,1) NOT NULL, 
[FoodType] nvarchar(50)  NULL, 
 CONSTRAINT [834a2d49-74b8-4adb-b00a-1216b27e19caFoodTypeId_IsUnique] UNIQUE(FoodTypeId),CONSTRAINT [834a2d49-74b8-4adb-b00a-1216b27e19caFoodTypeId_IsPrimary] primary key (FoodTypeId))  
GO
CREATE TABLE [TanentURL]([URLID] int IDENTITY(1,1) NOT NULL, 
[URL] nvarchar(MAX)  NOT NULL, 
[CreatedOn] datetime  NULL, 
[ModifiedOn] datetime  NULL, 
 CONSTRAINT [52b7506d-e9af-447f-9f8b-396112a8ae7cURLID_IsUnique] UNIQUE(URLID),CONSTRAINT [52b7506d-e9af-447f-9f8b-396112a8ae7cURLID_IsPrimary] primary key (URLID))  
GO
CREATE TABLE [ImpactOnAmount]([ImpId] int IDENTITY(1,1) NOT NULL, 
[Impact] nvarchar(MAX)  NOT NULL, 
 CONSTRAINT [f1f939f4-6c03-4f1c-8414-c0be228e254bImpId_IsUnique] UNIQUE(ImpId),CONSTRAINT [f1f939f4-6c03-4f1c-8414-c0be228e254bImpId_IsPrimary] primary key (ImpId))  
GO
CREATE TABLE [xTransaction]([Id] int IDENTITY(1,1) NOT NULL, 
[DebitAcId] int  NULL, 
[CreditAcId] int  NULL, 
[CreditAmount] decimal  NULL, 
[DebitAmount] decimal  NULL, 
[RBID] int  NULL, 
 CONSTRAINT [c5bb2cf5-8f23-460d-91c6-854d2d2c917aId_IsUnique] UNIQUE(Id),CONSTRAINT [c5bb2cf5-8f23-460d-91c6-854d2d2c917aId_IsPrimary] primary key (Id))  
GO
CREATE TABLE [IngMovType]([IngMovTypeId] int IDENTITY(1,1) NOT NULL, 
[IngMovType] nvarchar(50)  NOT NULL, 
[IngMovImpact] bit  NULL, 
 CONSTRAINT [c725a3a3-1302-4d38-8785-4070d0bf850bIngMovTypeId_IsUnique] UNIQUE(IngMovTypeId),CONSTRAINT [c725a3a3-1302-4d38-8785-4070d0bf850bIngMovTypeId_IsPrimary] primary key (IngMovTypeId))  
GO
CREATE TABLE [UIComponents_Menu_cd9a5d6c627d4f88bee369afa4f1c8e3]([ComponentId] int IDENTITY(1,1) NOT NULL, 
[ParentComponentId] int  NULL, 
[PageLinkId] int  NULL, 
[Text] nvarchar(MAX)  NULL, 
[Image] nvarchar(MAX)  NULL, 
[MenuType] nvarchar(50)  NULL, 
[Status] nchar(50)  NOT NULL, 
 CONSTRAINT [36884422-388a-4c8b-a6c5-c21dee294753ComponentId_IsUnique] UNIQUE(ComponentId),CONSTRAINT [36884422-388a-4c8b-a6c5-c21dee294753ComponentId_IsPrimary] primary key (ComponentId))  
GO
CREATE TABLE [Unit_b4ca0508501c4de8a0200cbaebcf9ef7]([UnitId] int IDENTITY(1,1) NOT NULL, 
[UnitName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [bd5a154b-1b4e-4fcb-8ce0-10c578bab0c6UnitId_IsUnique] UNIQUE(UnitId),CONSTRAINT [bd5a154b-1b4e-4fcb-8ce0-10c578bab0c6UnitId_IsPrimary] primary key (UnitId))  
GO
CREATE TABLE [UserPinCode_27CC8E48C170452991DC6E00C80BE6CC]([Id] int IDENTITY(1,1) NOT NULL, 
[PinCode] nvarchar(50)  NOT NULL, 
[UId] int  NOT NULL, 
 CONSTRAINT [2cf90a72-a16a-42fe-801a-de76f2045bbbId_IsUnique] UNIQUE(Id),CONSTRAINT [2cf90a72-a16a-42fe-801a-de76f2045bbbId_IsPrimary] primary key (Id))  
GO
CREATE TABLE [IngredientsType_22446b833c74482d8d318183f80b3dfd]([IngredientTypeId] int IDENTITY(1,1) NOT NULL, 
[IngredientType] nvarchar(50)  NULL, 
 CONSTRAINT [b277e14f-7027-40ec-90b9-73d63c50c513IngredientTypeId_IsUnique] UNIQUE(IngredientTypeId),CONSTRAINT [b277e14f-7027-40ec-90b9-73d63c50c513IngredientTypeId_IsPrimary] primary key (IngredientTypeId))  
GO
CREATE TABLE [UserStatus_fcbe41c35787478994dfa4028b5cfc0d]([UserStatusId] int IDENTITY(1,1) NOT NULL, 
[UserStatus] nvarchar(50)  NULL, 
 CONSTRAINT [cd3b3f40-47c2-4a1d-ad36-5d682770a7ceUserStatusId_IsUnique] UNIQUE(UserStatusId),CONSTRAINT [cd3b3f40-47c2-4a1d-ad36-5d682770a7ceUserStatusId_IsPrimary] primary key (UserStatusId))  
GO
CREATE TABLE [ItemCategory]([Id] int IDENTITY(1,1) NOT NULL, 
[Name] int  NULL, 
 CONSTRAINT [2bd92ddb-e2e6-4b62-a372-20fee41c8b8aId_IsUnique] UNIQUE(Id),CONSTRAINT [2bd92ddb-e2e6-4b62-a372-20fee41c8b8aId_IsPrimary] primary key (Id))  
GO
CREATE TABLE [Location_49ea62a9078742c990aa00e20a69bcbf]([LocationId] int IDENTITY(1,1) NOT NULL, 
[Location] nvarchar(50)  NULL, 
[LocParentId] int  NULL, 
[LocTypeId] int  NULL, 
 CONSTRAINT [6b9c7e46-9043-4895-af3f-d52acf9d468eLocationId_IsUnique] UNIQUE(LocationId),CONSTRAINT [6b9c7e46-9043-4895-af3f-d52acf9d468eLocationId_IsPrimary] primary key (LocationId))  
GO
CREATE TABLE [UserType_1e2f13da1a36474499de37c4e10797b8]([UserTypeId] int IDENTITY(1,1) NOT NULL, 
[UserType] nvarchar(50)  NULL, 
 CONSTRAINT [d8fd0b88-f45b-4f1f-961b-ea697747a22aUserTypeId_IsUnique] UNIQUE(UserTypeId),CONSTRAINT [d8fd0b88-f45b-4f1f-961b-ea697747a22aUserTypeId_IsPrimary] primary key (UserTypeId))  
GO
CREATE TABLE [LocationType]([LocTypeId] int IDENTITY(1,1) NOT NULL, 
[LocType] nvarchar(50)  NOT NULL, 
 CONSTRAINT [875d7ff8-3200-4953-a6e9-02cd50852185LocTypeId_IsUnique] UNIQUE(LocTypeId),CONSTRAINT [875d7ff8-3200-4953-a6e9-02cd50852185LocTypeId_IsPrimary] primary key (LocTypeId))  
GO
CREATE TABLE [MenuStatus_0da48f3c24314dd6a2a44e241b0d1444]([MenuStatusId] int IDENTITY(1,1) NOT NULL, 
[MenuStatusName] nvarchar(50)  NULL, 
 CONSTRAINT [fdf6c4fc-aa3b-4678-88c2-b93a5b521769MenuStatusId_IsUnique] UNIQUE(MenuStatusId),CONSTRAINT [fdf6c4fc-aa3b-4678-88c2-b93a5b521769MenuStatusId_IsPrimary] primary key (MenuStatusId))  
GO
CREATE TABLE [OnDays_928f22928nx9nynic92y4c92y988cncnih48]([OnDaysId] int IDENTITY(1,1) NOT NULL, 
[Monday] bit  NULL, 
[Tuesday] bit  NULL, 
[Wednessday] bit  NULL, 
[Thursday] bit  NULL, 
[Friday] bit  NULL, 
[Saturday] bit  NULL, 
[Sunday] bit  NULL, 
 CONSTRAINT [2314c6da-c6c6-4e49-b208-88072847124fOnDaysId_IsUnique] UNIQUE(OnDaysId),CONSTRAINT [2314c6da-c6c6-4e49-b208-88072847124fOnDaysId_IsPrimary] primary key (OnDaysId))  
GO
CREATE TABLE [OrderDealStatus_55d2efeaccc44f62a09808fcd57a7ab0]([OrderDealStatusId] int IDENTITY(1,1) NOT NULL, 
[Status] nvarchar(50)  NULL, 
 CONSTRAINT [5b0b8593-32b4-4d73-b368-2fd9321247b1OrderDealStatusId_IsUnique] UNIQUE(OrderDealStatusId),CONSTRAINT [5b0b8593-32b4-4d73-b368-2fd9321247b1OrderDealStatusId_IsPrimary] primary key (OrderDealStatusId))  
GO
CREATE TABLE [Voucher]([Id] int IDENTITY(1,1) NOT NULL, 
[VoucherDescription] nchar(10)  NULL, 
[VoucherTypeId] int  NULL, 
[RBId] int  NULL, 
[Amount] decimal  NULL, 
[RBPaymentTypeId] int  NULL, 
[FromAccount] int  NULL, 
[ToAccount] int  NULL, 
 CONSTRAINT [325df5ee-6519-4230-ab8f-ec6e6861a136Id_IsUnique] UNIQUE(Id),CONSTRAINT [325df5ee-6519-4230-ab8f-ec6e6861a136Id_IsPrimary] primary key (Id))  
GO
CREATE TABLE [VoucherType]([Id] int IDENTITY(1,1) NOT NULL, 
[VoucherType] nvarchar(50)  NULL, 
 CONSTRAINT [7ab1495f-00ac-495e-902e-91d480b3135eId_IsUnique] UNIQUE(Id),CONSTRAINT [7ab1495f-00ac-495e-902e-91d480b3135eId_IsPrimary] primary key (Id))  
GO
CREATE TABLE [OrderPayment]([OrderPaymentId] int IDENTITY(1,1) NOT NULL, 
[OrderId] int  NULL, 
[Payment] int  NULL, 
[CreatedBy] int  NULL, 
[CreatedOn] datetime  NULL, 
[Discount] int  NULL, 
 CONSTRAINT [3ada1068-ae3b-456e-9058-6937ce42d297OrderPaymentId_IsUnique] UNIQUE(OrderPaymentId),CONSTRAINT [3ada1068-ae3b-456e-9058-6937ce42d297OrderPaymentId_IsPrimary] primary key (OrderPaymentId))  
GO
CREATE TABLE [OrderStatus_088b3f7e920a41e9bcac65feac67e7df]([OrderStatusId] int IDENTITY(1,1) NOT NULL, 
[OrderStatus] nvarchar(50)  NOT NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[CreatedDate] datetime  NULL, 
[ModifiedDate] datetime  NULL, 
 CONSTRAINT [63f2737e-d0ed-4965-be09-6228220679b6OrderStatusId_IsUnique] UNIQUE(OrderStatusId),CONSTRAINT [63f2737e-d0ed-4965-be09-6228220679b6OrderStatusId_IsPrimary] primary key (OrderStatusId))  
GO
CREATE TABLE [Pages]([PageId] int IDENTITY(1,1) NOT NULL, 
[Pages] nvarchar(50)  NOT NULL, 
[Module] nchar(50)  NOT NULL, 
 CONSTRAINT [5e2f36b9-3baa-4b64-8255-7e8373e41c38PageId_IsUnique] UNIQUE(PageId),CONSTRAINT [5e2f36b9-3baa-4b64-8255-7e8373e41c38PageId_IsPrimary] primary key (PageId))  
GO
CREATE TABLE [PaymentType]([Id] int IDENTITY(1,1) NOT NULL, 
[PaymentType] nvarchar(50)  NULL, 
 CONSTRAINT [fbfd2e6a-e737-4d76-8f33-f4223a405292Id_IsUnique] UNIQUE(Id),CONSTRAINT [fbfd2e6a-e737-4d76-8f33-f4223a405292Id_IsPrimary] primary key (Id))  
GO
CREATE TABLE [PersonStatus_8875068e72f54a53947a19627868575f]([PersonStatusId] int IDENTITY(1,1) NOT NULL, 
[PersonStatus] nvarchar(50)  NOT NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[CreatedDate] datetime  NULL, 
[ModifiedDate] datetime  NULL, 
 CONSTRAINT [f4eb3889-4b44-4594-a06e-af4c17782444PersonStatusId_IsUnique] UNIQUE(PersonStatusId),CONSTRAINT [f4eb3889-4b44-4594-a06e-af4c17782444PersonStatusId_IsPrimary] primary key (PersonStatusId))  
GO
CREATE TABLE [PriceType]([PriceTypeId] int IDENTITY(1,1) NOT NULL, 
[PriceType] nvarchar(50)  NULL, 
 CONSTRAINT [9da2dedf-6af3-4b1e-bd80-6631023f0b36PriceTypeId_IsUnique] UNIQUE(PriceTypeId),CONSTRAINT [9da2dedf-6af3-4b1e-bd80-6631023f0b36PriceTypeId_IsPrimary] primary key (PriceTypeId))  
GO
CREATE TABLE [RateType]([RTypeId] int IDENTITY(1,1) NOT NULL, 
[RateType] nvarchar(MAX)  NOT NULL, 
 CONSTRAINT [fdad5631-ea2c-494d-9d06-930bec82a604RTypeId_IsUnique] UNIQUE(RTypeId),CONSTRAINT [fdad5631-ea2c-494d-9d06-930bec82a604RTypeId_IsPrimary] primary key (RTypeId))  
GO
CREATE TABLE [RBAccounts]([RBAccId] int IDENTITY(1,1) NOT NULL, 
[RBMAId] int  NOT NULL, 
[Description] nvarchar(1000)  NOT NULL, 
[OpeningBalnace] decimal  NOT NULL, 
 CONSTRAINT [95aad73c-6f17-496e-8702-7de8fe40aed5RBAccId_IsUnique] UNIQUE(RBAccId),CONSTRAINT [95aad73c-6f17-496e-8702-7de8fe40aed5RBAccId_IsPrimary] primary key (RBAccId))  
GO
CREATE TABLE [RBDealStatus_191a11eabdbd45abb59357b90f8a425a]([RBDealStatusId] int IDENTITY(1,1) NOT NULL, 
[RBId] int  NULL, 
[DealStatusId] int  NULL, 
 CONSTRAINT [12a89352-3d19-49cb-8437-e64eaedc38f6RBDealStatusId_IsUnique] UNIQUE(RBDealStatusId),CONSTRAINT [12a89352-3d19-49cb-8437-e64eaedc38f6RBDealStatusId_IsPrimary] primary key (RBDealStatusId))  
GO
CREATE TABLE [RBDealOption]([RBDealOptionId] int IDENTITY(1,1) NOT NULL, 
[ParentRBDealOptionId] int  NULL, 
[OptionName] nvarchar(50)  NULL, 
[RBId] int  NULL, 
 CONSTRAINT [b8e8d217-de4a-4a64-b1d3-6a3a7e430d9aRBDealOptionId_IsUnique] UNIQUE(RBDealOptionId),CONSTRAINT [b8e8d217-de4a-4a64-b1d3-6a3a7e430d9aRBDealOptionId_IsPrimary] primary key (RBDealOptionId))  
GO
CREATE TABLE [RBDealOptionType]([RBDealOptionTypeId] int IDENTITY(1,1) NOT NULL, 
[TypeName] nvarchar(50)  NULL, 
[RBID] int  NULL, 
 CONSTRAINT [799808d8-0dc0-4431-af5f-42ea821c232eRBDealOptionTypeId_IsUnique] UNIQUE(RBDealOptionTypeId),CONSTRAINT [799808d8-0dc0-4431-af5f-42ea821c232eRBDealOptionTypeId_IsPrimary] primary key (RBDealOptionTypeId))  
GO
CREATE TABLE [RBDishRBIngredientStatus_5f3188afbaab4cf19f8f936a51e9cf45]([RBDishRBIngredientStatusId] int IDENTITY(1,1) NOT NULL, 
[RBDishRBIngredientStatus] nvarchar(50)  NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[CreatedOn] datetime  NULL, 
[modifiedOn] datetime  NULL, 
 CONSTRAINT [518af658-7760-40ce-a73c-04a87c3462f1RBDishRBIngredientStatusId_IsUnique] UNIQUE(RBDishRBIngredientStatusId),CONSTRAINT [518af658-7760-40ce-a73c-04a87c3462f1RBDishRBIngredientStatusId_IsPrimary] primary key (RBDishRBIngredientStatusId))  
GO
CREATE TABLE [DealCategory_09ec523a47bd40809421b877bab1574c]([DealCategoryId] int IDENTITY(1,1) NOT NULL, 
[DealCategoryName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [f9d1013f-4826-4cd4-8e16-8edf961235c2DealCategoryId_IsUnique] UNIQUE(DealCategoryId),CONSTRAINT [f9d1013f-4826-4cd4-8e16-8edf961235c2DealCategoryId_IsPrimary] primary key (DealCategoryId))  
GO
CREATE TABLE [RBDishStatus_8047a5c868864cc196eec435a09a35f6]([RBDishStatusId] int IDENTITY(1,1) NOT NULL, 
[DishStatusId] int  NOT NULL, 
[RBID] int  NULL, 
 CONSTRAINT [c377417a-5015-4d51-8528-1b9f4e39b6f8RBDishStatusId_IsUnique] UNIQUE(RBDishStatusId),CONSTRAINT [c377417a-5015-4d51-8528-1b9f4e39b6f8RBDishStatusId_IsPrimary] primary key (RBDishStatusId))  
GO
CREATE TABLE [Dish_bc2fbfffbee94a0a855a1177d516cae4]([DishId] int IDENTITY(1,1) NOT NULL, 
[DishName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [4a07486f-30b3-4e6c-b36a-3f5e66fa9791DishId_IsUnique] UNIQUE(DishId),CONSTRAINT [4a07486f-30b3-4e6c-b36a-3f5e66fa9791DishId_IsPrimary] primary key (DishId))  
GO
CREATE TABLE [RBItemCategory]([Id] int IDENTITY(1,1) NOT NULL, 
[RBId] int  NULL, 
[ICId] int  NULL, 
 CONSTRAINT [2c638085-bdf9-4f83-8bf7-64c879467eaaId_IsUnique] UNIQUE(Id),CONSTRAINT [2c638085-bdf9-4f83-8bf7-64c879467eaaId_IsPrimary] primary key (Id))  
GO
CREATE TABLE [AccessType]([AccessTypeId] int IDENTITY(1,1) NOT NULL, 
[AccessTypeName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [85f496ff-9544-4fba-a1cd-c9cf141e96c6AccessTypeId_IsUnique] UNIQUE(AccessTypeId),CONSTRAINT [85f496ff-9544-4fba-a1cd-c9cf141e96c6AccessTypeId_IsPrimary] primary key (AccessTypeId))  
GO
CREATE TABLE [AccountsPaymentType]([PaymentTypeId] int IDENTITY(1,1) NOT NULL, 
[PaymentType] nvarchar(50)  NOT NULL, 
 CONSTRAINT [3a74bcda-9b51-4bbf-aa32-4af09fc92379PaymentTypeId_IsUnique] UNIQUE(PaymentTypeId),CONSTRAINT [3a74bcda-9b51-4bbf-aa32-4af09fc92379PaymentTypeId_IsPrimary] primary key (PaymentTypeId))  
GO
CREATE TABLE [RBRider]([RBRiderId] int IDENTITY(1,1) NOT NULL, 
[Name] nvarchar(50)  NULL, 
[ContactNumber] nvarchar(50)  NULL, 
[Rbid] int  NULL, 
 CONSTRAINT [12fe14f4-a487-42af-b215-994c8a1cb606RBRiderId_IsUnique] UNIQUE(RBRiderId),CONSTRAINT [12fe14f4-a487-42af-b215-994c8a1cb606RBRiderId_IsPrimary] primary key (RBRiderId))  
GO
CREATE TABLE [AccountsVouchers]([VId] int IDENTITY(1,1) NOT NULL, 
[CreditAccountId] int  NOT NULL, 
[DebitAccountId] int  NOT NULL, 
[VTId] int  NOT NULL, 
[PTId] int  NOT NULL, 
[RBID] int  NOT NULL, 
[Amount] decimal  NOT NULL, 
[Comments] nvarchar(50)  NOT NULL, 
[PVDate] datetime  NOT NULL, 
 CONSTRAINT [1e5d841d-3574-4a01-a01f-5f739153c92dVId_IsUnique] UNIQUE(VId),CONSTRAINT [1e5d841d-3574-4a01-a01f-5f739153c92dVId_IsPrimary] primary key (VId))  
GO
CREATE TABLE [AccountsVoucherType]([VTypeId] int IDENTITY(1,1) NOT NULL, 
[VoucherType] nvarchar(20)  NOT NULL, 
 CONSTRAINT [a43a047a-9879-4425-b73a-8ad7be81a7d5VTypeId_IsUnique] UNIQUE(VTypeId),CONSTRAINT [a43a047a-9879-4425-b73a-8ad7be81a7d5VTypeId_IsPrimary] primary key (VTypeId))  
GO
CREATE TABLE [RBStatus_47b55d3528464f12814a7b15147730e7]([RBStatusId] int IDENTITY(1,1) NOT NULL, 
[RBStatus] nvarchar(50)  NOT NULL, 
 CONSTRAINT [44ff4bdc-78c0-4557-aa1e-72573e4e834eRBStatusId_IsUnique] UNIQUE(RBStatusId),CONSTRAINT [44ff4bdc-78c0-4557-aa1e-72573e4e834eRBStatusId_IsPrimary] primary key (RBStatusId))  
GO
CREATE TABLE [ApplicationConfiguration_f32373d1dd24434196bc91cedf65f097]([ConfigId] int IDENTITY(1,1) NOT NULL, 
[Environment] nvarchar(50)  NULL, 
[Domain] nvarchar(100)  NULL, 
[Name] nvarchar(100)  NULL, 
[Value] nvarchar(MAX)  NOT NULL, 
[DataType] nvarchar(50)  NULL, 
 CONSTRAINT [69934324-d366-42d2-8d50-0748e1101c23ConfigId_IsUnique] UNIQUE(ConfigId),CONSTRAINT [69934324-d366-42d2-8d50-0748e1101c23ConfigId_IsPrimary] primary key (ConfigId))  
GO
CREATE TABLE [OrderPaymentRBBPackage]([OrderPaymentRBBPackageId] int IDENTITY(1,1) NOT NULL, 
[RBBPackageId] int  NULL, 
[OrderId] int  NULL, 
[RateValue] decimal  NULL, 
[Rate] decimal  NULL, 
 CONSTRAINT [d24a889c-2c4e-484a-a49b-c91a01fb956cOrderPaymentRBBPackageId_IsUnique] UNIQUE(OrderPaymentRBBPackageId),CONSTRAINT [d24a889c-2c4e-484a-a49b-c91a01fb956cOrderPaymentRBBPackageId_IsPrimary] primary key (OrderPaymentRBBPackageId))  
GO
CREATE TABLE [RBTableType]([RBTableTypeId] int IDENTITY(1,1) NOT NULL, 
[RBID] int  NULL, 
[TableTypeId] int  NULL, 
 CONSTRAINT [2e242cd5-4f1f-4cb9-b222-eb820e42acdbRBTableTypeId_IsUnique] UNIQUE(RBTableTypeId),CONSTRAINT [2e242cd5-4f1f-4cb9-b222-eb820e42acdbRBTableTypeId_IsPrimary] primary key (RBTableTypeId))  
GO
CREATE TABLE [BillPackageType]([BPkgTypeId] int IDENTITY(1,1) NOT NULL, 
[BPackageType] nvarchar(MAX)  NOT NULL, 
 CONSTRAINT [a729c35e-7538-4e6b-903e-354d1a64279eBPkgTypeId_IsUnique] UNIQUE(BPkgTypeId),CONSTRAINT [a729c35e-7538-4e6b-903e-354d1a64279eBPkgTypeId_IsPrimary] primary key (BPkgTypeId))  
GO
CREATE TABLE [Contact_6d0f86b365194c0b9b600de2d6f5e186]([ContId] int IDENTITY(1,1) NOT NULL, 
[Contact] nvarchar(50)  NULL, 
[ContTypeId] int  NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[CreatedDate] datetime  NULL, 
[ModifiedDate] datetime  NULL, 
 CONSTRAINT [e73596d6-a59a-4309-9736-4a59d7b500b5ContId_IsUnique] UNIQUE(ContId),CONSTRAINT [e73596d6-a59a-4309-9736-4a59d7b500b5ContId_IsPrimary] primary key (ContId),CONSTRAINT [FK_ContTypeId_ce8c4b99-2280-4015-b01f-66b9b06b94d1_ContactType_a611fa5acbe44865821c669b46b37100ContTypeId] FOREIGN KEY([ContTypeId])
            REFERENCES [ContactType_a611fa5acbe44865821c669b46b37100] ([ContTypeId]))  
GO
CREATE TABLE [RBUserType_876243b2ifo72874gf8b287bf8bvc428b]([RBUserTypeId] int IDENTITY(1,1) NOT NULL, 
[UserTypeId] int  NULL, 
[RBId] int  NULL, 
 CONSTRAINT [89c17437-4bc1-4e9d-bd35-7f199cb05051RBUserTypeId_IsUnique] UNIQUE(RBUserTypeId),CONSTRAINT [89c17437-4bc1-4e9d-bd35-7f199cb05051RBUserTypeId_IsPrimary] primary key (RBUserTypeId),CONSTRAINT [FK_UserTypeId_2278d2ef-830b-4da9-ac5e-16710d7d2c29_UserType_1e2f13da1a36474499de37c4e10797b8UserTypeId] FOREIGN KEY([UserTypeId])
            REFERENCES [UserType_1e2f13da1a36474499de37c4e10797b8] ([UserTypeId]))  
GO
CREATE TABLE [RBUT_UIComponentsMenu_6a73714c45844eaabfc0fb8c5787cad8]([RBUT_ComponentsId] int IDENTITY(1,1) NOT NULL, 
[ComponentId] int  NOT NULL, 
[RBUT_Id] int  NOT NULL, 
 CONSTRAINT [241c59db-2f47-41fd-9c9b-f9a8d7d49c9bRBUT_ComponentsId_IsUnique] UNIQUE(RBUT_ComponentsId),CONSTRAINT [241c59db-2f47-41fd-9c9b-f9a8d7d49c9bRBUT_ComponentsId_IsPrimary] primary key (RBUT_ComponentsId),CONSTRAINT [FK_ComponentId_73a902db-c831-4192-b71a-5359023d6379_UIComponents_Menu_cd9a5d6c627d4f88bee369afa4f1c8e3ComponentId] FOREIGN KEY([ComponentId])
            REFERENCES [UIComponents_Menu_cd9a5d6c627d4f88bee369afa4f1c8e3] ([ComponentId]))  
GO
CREATE TABLE [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57]([RestBranchId] int IDENTITY(1,1) NOT NULL, 
[RId] int  NOT NULL, 
[RestBranchName] nvarchar(50)  NULL, 
[RestBranchCode] nvarchar(50)  NULL, 
[RestBranchType] nvarchar(50)  NULL, 
[RestBranchLink] int  NOT NULL, 
[LocationId] int  NOT NULL, 
[RBStatusId] int  NOT NULL, 
 CONSTRAINT [6b203108-c922-4072-8668-ab03b303dd33RestBranchId_IsUnique] UNIQUE(RestBranchId),CONSTRAINT [6b203108-c922-4072-8668-ab03b303dd33RestBranchId_IsPrimary] primary key (RestBranchId),CONSTRAINT [FK_RId_2296de66-ea01-4085-a4b3-188393c6af07_Restaurant_618c0bf8e7a649d8ad00d6c9c82f4be5RId] FOREIGN KEY([RId])
            REFERENCES [Restaurant_618c0bf8e7a649d8ad00d6c9c82f4be5] ([RId]))  
GO
CREATE TABLE [Ingredient_effb63e0d86e4ca6bbb7b515a354c574]([IngredientId] int IDENTITY(1,1) NOT NULL, 
[IngredientName] nvarchar(50)  NULL, 
[IngredientTypeId] int  NULL, 
 CONSTRAINT [b8c2fa08-7a29-49e1-9a99-917aa48e5e3aIngredientId_IsUnique] UNIQUE(IngredientId),CONSTRAINT [b8c2fa08-7a29-49e1-9a99-917aa48e5e3aIngredientId_IsPrimary] primary key (IngredientId),CONSTRAINT [FK_IngredientTypeId_a06074ec-2a28-4274-8313-383ca9c7ed6c_IngredientsType_22446b833c74482d8d318183f80b3dfdIngredientTypeId] FOREIGN KEY([IngredientTypeId])
            REFERENCES [IngredientsType_22446b833c74482d8d318183f80b3dfd] ([IngredientTypeId]))  
GO
CREATE TABLE [MasterAccounts]([MAId] int IDENTITY(1,1) NOT NULL, 
[FMAId] int  NOT NULL, 
[MAName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [e5df8c5c-75c2-4f66-9d7a-4a5fd7eae317MAId_IsUnique] UNIQUE(MAId),CONSTRAINT [e5df8c5c-75c2-4f66-9d7a-4a5fd7eae317MAId_IsPrimary] primary key (MAId),CONSTRAINT [FK_FMAId_a563135e-23c5-4164-a949-e0dcf5253159_FixedMasterAccountsFMAId] FOREIGN KEY([FMAId])
            REFERENCES [FixedMasterAccounts] ([FMAId]))  
GO
CREATE TABLE [OrderDelivery]([OrderDeliverId] int IDENTITY(1,1) NOT NULL, 
[OrderId] int  NULL, 
[Charges] decimal  NULL, 
[DeliveryArea] int  NULL, 
[Address] nvarchar(50)  NULL, 
[Name] nvarchar(50)  NULL, 
[Phone] nvarchar(50)  NULL, 
[RBRiderId] int  NULL, 
 CONSTRAINT [204f036b-3713-4b5c-a0f7-3798b7ee4797OrderDeliverId_IsUnique] UNIQUE(OrderDeliverId),CONSTRAINT [204f036b-3713-4b5c-a0f7-3798b7ee4797OrderDeliverId_IsPrimary] primary key (OrderDeliverId),CONSTRAINT [FK_RBRiderId_ba6cd13a-5e49-4726-8948-c1ddd7da04ba_RBRiderRBRiderId] FOREIGN KEY([RBRiderId])
            REFERENCES [RBRider] ([RBRiderId]))  
GO
CREATE TABLE [PagesController]([PagesControllerId] int IDENTITY(1,1) NOT NULL, 
[PageId] int  NOT NULL, 
[PageControllerName] nvarchar(50)  NOT NULL, 
 CONSTRAINT [fece2c4b-c483-47cb-9b0c-aedaedb764e1PagesControllerId_IsUnique] UNIQUE(PagesControllerId),CONSTRAINT [fece2c4b-c483-47cb-9b0c-aedaedb764e1PagesControllerId_IsPrimary] primary key (PagesControllerId),CONSTRAINT [FK_PageId_ca379c68-5603-4f25-9aea-7a57aa01d2ff_PagesPageId] FOREIGN KEY([PageId])
            REFERENCES [Pages] ([PageId]))  
GO
CREATE TABLE [Person_3820778b1c784a498d956d7fcd1b997a]([PersonId] int IDENTITY(1,1) NOT NULL, 
[PersonFName] nvarchar(50)  NULL, 
[PersonLName] nvarchar(50)  NULL, 
[PersonGender] nvarchar(50)  NULL, 
[PersonStatusId] int  NULL, 
[CreatedDate] datetime  NULL, 
[ModifiedDate] datetime  NULL, 
 CONSTRAINT [0c8121a7-dbe7-4997-8c90-0e12beefcba0PersonId_IsUnique] UNIQUE(PersonId),CONSTRAINT [0c8121a7-dbe7-4997-8c90-0e12beefcba0PersonId_IsPrimary] primary key (PersonId),CONSTRAINT [FK_PersonStatusId_dcdb6e02-1a98-4ae3-84ba-4cdebf1eda33_PersonStatus_8875068e72f54a53947a19627868575fPersonStatusId] FOREIGN KEY([PersonStatusId])
            REFERENCES [PersonStatus_8875068e72f54a53947a19627868575f] ([PersonStatusId]))  
GO
CREATE TABLE [RBBillPackageType]([RBBPkgTypeId] int IDENTITY(1,1) NOT NULL, 
[RBId] int  NOT NULL, 
[BPkgTypeId] int  NOT NULL, 
 CONSTRAINT [7697b84d-91be-4962-b6d6-5800023f4cb7RBBPkgTypeId_IsUnique] UNIQUE(RBBPkgTypeId),CONSTRAINT [7697b84d-91be-4962-b6d6-5800023f4cb7RBBPkgTypeId_IsPrimary] primary key (RBBPkgTypeId),CONSTRAINT [FK_BPkgTypeId_01df98b1-7bb9-4021-be51-af403f55462c_BillPackageTypeBPkgTypeId] FOREIGN KEY([BPkgTypeId])
            REFERENCES [BillPackageType] ([BPkgTypeId]))  
GO
CREATE TABLE [RBDealGenre_2529fb79f4d042b592c1ef86ab69b133]([RBDealGenreId] int IDENTITY(1,1) NOT NULL, 
[DealGenreId] int  NULL, 
[RestBranchId] int  NULL, 
 CONSTRAINT [9fe1d928-b81f-43bb-a060-1c75cf6a922fRBDealGenreId_IsUnique] UNIQUE(RBDealGenreId),CONSTRAINT [9fe1d928-b81f-43bb-a060-1c75cf6a922fRBDealGenreId_IsPrimary] primary key (RBDealGenreId),CONSTRAINT [FK_DealGenreId_e69e0396-e967-466c-9246-60bf8500f677_DealGenre_7100da0d0fbb48ebb4bd68caf5b84707DealGenreId] FOREIGN KEY([DealGenreId])
            REFERENCES [DealGenre_7100da0d0fbb48ebb4bd68caf5b84707] ([DealGenreId]))  
GO
CREATE TABLE [RBPaymentType]([Id] int IDENTITY(1,1) NOT NULL, 
[PTId] int  NULL, 
[RBId] int  NULL, 
[RBAccId] int  NULL, 
 CONSTRAINT [77235054-eb97-4f52-9738-152e08e63791Id_IsUnique] UNIQUE(Id),CONSTRAINT [77235054-eb97-4f52-9738-152e08e63791Id_IsPrimary] primary key (Id),CONSTRAINT [FK_RBAccId_692ff3f4-5a7b-45df-8e5a-5ec65483ff40_RBAccountsRBAccId] FOREIGN KEY([RBAccId])
            REFERENCES [RBAccounts] ([RBAccId]))  
GO
CREATE TABLE [RBPriceType]([RBPriceTypeId] int IDENTITY(1,1) NOT NULL, 
[RBId] int  NULL, 
[PriceTypeId] int  NULL, 
 CONSTRAINT [0bf043a2-7028-46ae-878b-def5d2688638RBPriceTypeId_IsUnique] UNIQUE(RBPriceTypeId),CONSTRAINT [0bf043a2-7028-46ae-878b-def5d2688638RBPriceTypeId_IsPrimary] primary key (RBPriceTypeId),CONSTRAINT [FK_PriceTypeId_a20fa769-6b24-4c10-be10-9f3917b1c9ad_PriceTypePriceTypeId] FOREIGN KEY([PriceTypeId])
            REFERENCES [PriceType] ([PriceTypeId]))  
GO
CREATE TABLE [RPerson_7b6a8e58dbb343d98b57174d567e6107]([RPersonId] int IDENTITY(1,1) NOT NULL, 
[RId] int  NOT NULL, 
[PersonId] int  NOT NULL, 
 CONSTRAINT [09ca4efe-5111-4f03-a671-3944abc576eaRPersonId_IsUnique] UNIQUE(RPersonId),CONSTRAINT [09ca4efe-5111-4f03-a671-3944abc576eaRPersonId_IsPrimary] primary key (RPersonId),CONSTRAINT [FK_RId_cd12ec65-bc5e-41a5-b036-e7429d1ffcf3_Restaurant_618c0bf8e7a649d8ad00d6c9c82f4be5RId] FOREIGN KEY([RId])
            REFERENCES [Restaurant_618c0bf8e7a649d8ad00d6c9c82f4be5] ([RId]),CONSTRAINT [FK_PersonId_752245f5-e85e-4417-80bd-14250f8cb2d5_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]))  
GO
CREATE TABLE [Floor_f97756e348cb4b35b6809aa80d78be3b]([FloorId] int IDENTITY(1,1) NOT NULL, 
[FloorName] nvarchar(50)  NULL, 
[RestBranchId] int  NULL, 
[FloorStatusId] int  NULL, 
 CONSTRAINT [61318c1e-65ed-47f4-b813-4aabeee09dbeFloorId_IsUnique] UNIQUE(FloorId),CONSTRAINT [61318c1e-65ed-47f4-b813-4aabeee09dbeFloorId_IsPrimary] primary key (FloorId),CONSTRAINT [FK_RestBranchId_1f828195-aee0-4d8d-900e-bcde27fc1e19_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_FloorStatusId_8ca3c5c3-4736-466e-af50-559e20449b7a_FloorStatus_a467bbe004344bf0a3dae59e1053d369FloorStatusId] FOREIGN KEY([FloorStatusId])
            REFERENCES [FloorStatus_a467bbe004344bf0a3dae59e1053d369] ([FloorStatusId]))  
GO
CREATE TABLE [Users_d25e29029f284e00b51eda96ab0cd491]([UserId] int IDENTITY(1,1) NOT NULL, 
[UserName] nvarchar(50)  NULL, 
[UserPassword] nvarchar(50)  NULL, 
[PasswordHint] nvarchar(50)  NULL, 
[UserTypeId] int  NULL, 
[PersonId] int  NULL, 
[UserStatusId] int  NULL, 
 CONSTRAINT [9ad0db9f-815f-4a67-85ae-ca3354f9bc56UserId_IsUnique] UNIQUE(UserId),CONSTRAINT [9ad0db9f-815f-4a67-85ae-ca3354f9bc56UserId_IsPrimary] primary key (UserId),CONSTRAINT [FK_UserTypeId_e7507ae9-ef1b-4b06-94bb-a1d30543d74c_UserType_1e2f13da1a36474499de37c4e10797b8UserTypeId] FOREIGN KEY([UserTypeId])
            REFERENCES [UserType_1e2f13da1a36474499de37c4e10797b8] ([UserTypeId]),CONSTRAINT [FK_PersonId_126f803c-7ab0-4646-9fe5-927670d0dc2d_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]),CONSTRAINT [FK_UserStatusId_d2dee82d-a693-457e-b209-b504d1ff61c0_UserStatus_fcbe41c35787478994dfa4028b5cfc0dUserStatusId] FOREIGN KEY([UserStatusId])
            REFERENCES [UserStatus_fcbe41c35787478994dfa4028b5cfc0d] ([UserStatusId]))  
GO
CREATE TABLE [UserTypePages]([UTPageId] int IDENTITY(1,1) NOT NULL, 
[PagesId] int  NOT NULL, 
[RBUserTypeId] int  NOT NULL, 
 CONSTRAINT [ceb1e625-2405-4cbe-932a-01de4c7b8ab3UTPageId_IsUnique] UNIQUE(UTPageId),CONSTRAINT [ceb1e625-2405-4cbe-932a-01de4c7b8ab3UTPageId_IsPrimary] primary key (UTPageId),CONSTRAINT [FK_RBUserTypeId_d04772fc-bfd9-4215-ae01-456c9405b3bd_RBUserType_876243b2ifo72874gf8b287bf8bvc428bRBUserTypeId] FOREIGN KEY([RBUserTypeId])
            REFERENCES [RBUserType_876243b2ifo72874gf8b287bf8bvc428b] ([RBUserTypeId]))  
GO
CREATE TABLE [UTPageController]([UTPCId] int IDENTITY(1,1) NOT NULL, 
[PagesControllerId] int  NOT NULL, 
[RBUserTypeId] int  NOT NULL, 
[AccessTypeId] int  NOT NULL, 
 CONSTRAINT [6bc67683-40f5-40e5-989f-809ca538d0c1UTPCId_IsUnique] UNIQUE(UTPCId),CONSTRAINT [6bc67683-40f5-40e5-989f-809ca538d0c1UTPCId_IsPrimary] primary key (UTPCId),CONSTRAINT [FK_PagesControllerId_bf38dd3d-3f9f-4500-93da-09b50c677a6c_PagesControllerPagesControllerId] FOREIGN KEY([PagesControllerId])
            REFERENCES [PagesController] ([PagesControllerId]),CONSTRAINT [FK_RBUserTypeId_9c8c6f43-e5e6-46df-8d28-07b0507a83c0_RBUserType_876243b2ifo72874gf8b287bf8bvc428bRBUserTypeId] FOREIGN KEY([RBUserTypeId])
            REFERENCES [RBUserType_876243b2ifo72874gf8b287bf8bvc428b] ([RBUserTypeId]),CONSTRAINT [FK_AccessTypeId_d0b8cd70-b0b3-4355-9727-183efeba3d03_AccessTypeAccessTypeId] FOREIGN KEY([AccessTypeId])
            REFERENCES [AccessType] ([AccessTypeId]))  
GO
CREATE TABLE [Vendor]([VId] int IDENTITY(1,1) NOT NULL, 
[NIC] nvarchar(50)  NULL, 
[PersonId] int  NOT NULL, 
[RBAccountId] int  NULL, 
 CONSTRAINT [a367eaa2-0652-4af4-9c70-42fb43529481VId_IsUnique] UNIQUE(VId),CONSTRAINT [a367eaa2-0652-4af4-9c70-42fb43529481VId_IsPrimary] primary key (VId),CONSTRAINT [FK_PersonId_fb03c7b2-d23d-4b05-912b-93f785602e71_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]))  
GO
CREATE TABLE [PersonContact_19800a9da50b45e5b9fa92a4c68d0b49]([PersonContId] int IDENTITY(1,1) NOT NULL, 
[PersonId] int  NULL, 
[ContId] int  NULL, 
 CONSTRAINT [d928fcee-a54e-43c0-b819-a5b18f1f63dbPersonContId_IsUnique] UNIQUE(PersonContId),CONSTRAINT [d928fcee-a54e-43c0-b819-a5b18f1f63dbPersonContId_IsPrimary] primary key (PersonContId),CONSTRAINT [FK_PersonId_35f53045-98e2-4de0-be40-a4e06e8a5975_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]),CONSTRAINT [FK_ContId_b7ea9435-d03a-4018-95f7-7902140cb4ca_Contact_6d0f86b365194c0b9b600de2d6f5e186ContId] FOREIGN KEY([ContId])
            REFERENCES [Contact_6d0f86b365194c0b9b600de2d6f5e186] ([ContId]))  
GO
CREATE TABLE [RBBillPackage]([RBBPkgId] int IDENTITY(1,1) NOT NULL, 
[RBBPkgTypeId] int  NOT NULL, 
[ImpId] int  NOT NULL, 
[RateTypeId] int  NOT NULL, 
[Rate] decimal  NOT NULL, 
[IsOptional] bit  NOT NULL, 
[IsModifiable] bit  NOT NULL, 
 CONSTRAINT [dfc07f07-f0bf-49d2-b9f9-e187f02bcb17RBBPkgId_IsUnique] UNIQUE(RBBPkgId),CONSTRAINT [dfc07f07-f0bf-49d2-b9f9-e187f02bcb17RBBPkgId_IsPrimary] primary key (RBBPkgId),CONSTRAINT [FK_RBBPkgTypeId_87253b3e-bf79-46f8-8da5-2447ec274771_RBBillPackageTypeRBBPkgTypeId] FOREIGN KEY([RBBPkgTypeId])
            REFERENCES [RBBillPackageType] ([RBBPkgTypeId]),CONSTRAINT [FK_ImpId_1fa0f975-b72b-429e-9dba-8a35f3fad3cc_ImpactOnAmountImpId] FOREIGN KEY([ImpId])
            REFERENCES [ImpactOnAmount] ([ImpId]))  
GO
CREATE TABLE [RBContacts_dbe5bdfd013a4e71bf3f05ba129f6f41]([RBConactId] int IDENTITY(1,1) NOT NULL, 
[ContId] int  NULL, 
[RestBranchId] int  NULL, 
 CONSTRAINT [f77a7429-29b5-4470-a595-233236741d27RBConactId_IsUnique] UNIQUE(RBConactId),CONSTRAINT [f77a7429-29b5-4470-a595-233236741d27RBConactId_IsPrimary] primary key (RBConactId),CONSTRAINT [FK_ContId_d57ce437-292f-4d76-b083-469ee844b016_Contact_6d0f86b365194c0b9b600de2d6f5e186ContId] FOREIGN KEY([ContId])
            REFERENCES [Contact_6d0f86b365194c0b9b600de2d6f5e186] ([ContId]),CONSTRAINT [FK_RestBranchId_3b0ff588-2096-4401-b9c0-29b934aa8fb9_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]))  
GO
CREATE TABLE [RBDesignation_154d8039edf7436fb69f5a62f34fbad7]([RBDesignationId] int IDENTITY(1,1) NOT NULL, 
[RestBranchId] int  NULL, 
[DesignationId] int  NULL, 
 CONSTRAINT [531df2ec-a5fc-43aa-96bc-f7462ae5d918RBDesignationId_IsUnique] UNIQUE(RBDesignationId),CONSTRAINT [531df2ec-a5fc-43aa-96bc-f7462ae5d918RBDesignationId_IsPrimary] primary key (RBDesignationId),CONSTRAINT [FK_RestBranchId_b5dcd260-6aca-4331-b3c7-c9986d2b292a_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_DesignationId_d477a5f2-b923-49c7-9193-942d640bd9b7_Designation_dd854018789d47afa8a4426db0ff2608DesignationId] FOREIGN KEY([DesignationId])
            REFERENCES [Designation_dd854018789d47afa8a4426db0ff2608] ([DesignationId]))  
GO
CREATE TABLE [RBDish_156799924bc94bfba820d162b9ca718d]([RBDishId] int IDENTITY(1,1) NOT NULL, 
[DishId] int  NULL, 
[RestBranchId] int  NOT NULL, 
[RBDishStatusId] int  NULL, 
 CONSTRAINT [8ad52b7b-78f8-49af-94d7-ef390a3252b3RBDishId_IsUnique] UNIQUE(RBDishId),CONSTRAINT [8ad52b7b-78f8-49af-94d7-ef390a3252b3RBDishId_IsPrimary] primary key (RBDishId),CONSTRAINT [FK_DishId_a373231c-de1f-4871-ab4a-97b35c61c416_Dish_bc2fbfffbee94a0a855a1177d516cae4DishId] FOREIGN KEY([DishId])
            REFERENCES [Dish_bc2fbfffbee94a0a855a1177d516cae4] ([DishId]),CONSTRAINT [FK_RestBranchId_a4a7444e-9aa6-4599-8156-1629234aa864_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_RBDishStatusId_da5b51cf-c45c-4868-9c2a-752564a8b1ca_RBDishStatus_8047a5c868864cc196eec435a09a35f6RBDishStatusId] FOREIGN KEY([RBDishStatusId])
            REFERENCES [RBDishStatus_8047a5c868864cc196eec435a09a35f6] ([RBDishStatusId]))  
GO
CREATE TABLE [RBFoodType_3dd97faae4ff40258039eb585270240f]([RBFoodTypeId] int IDENTITY(1,1) NOT NULL, 
[FoodTypeId] int  NULL, 
[RestBranchId] int  NULL, 
 CONSTRAINT [b295a13f-5426-4836-b168-04bb120f774aRBFoodTypeId_IsUnique] UNIQUE(RBFoodTypeId),CONSTRAINT [b295a13f-5426-4836-b168-04bb120f774aRBFoodTypeId_IsPrimary] primary key (RBFoodTypeId),CONSTRAINT [FK_FoodTypeId_9891b233-ce05-463d-a422-887cc582f0e9_FoodType_ab4ce47fb93040bd97c5d9fdbf848408FoodTypeId] FOREIGN KEY([FoodTypeId])
            REFERENCES [FoodType_ab4ce47fb93040bd97c5d9fdbf848408] ([FoodTypeId]),CONSTRAINT [FK_RestBranchId_a6c41ca8-a1b4-4c3e-8a02-770c6e65321f_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]))  
GO
CREATE TABLE [RBIngriedient_bda7262c64354cf385543cf8110dbc3b]([RBIngredientId] int IDENTITY(1,1) NOT NULL, 
[IngredientId] int  NOT NULL, 
[RestBranchId] int  NOT NULL, 
[ConsumptionTypeId] int  NULL, 
[IsItem] bit  NULL, 
[RBICId] int  NULL, 
[OpeningBalance] int  NULL, 
 CONSTRAINT [7fb9654e-40e9-4c61-86cc-d6904e7ccac2RBIngredientId_IsUnique] UNIQUE(RBIngredientId),CONSTRAINT [7fb9654e-40e9-4c61-86cc-d6904e7ccac2RBIngredientId_IsPrimary] primary key (RBIngredientId),CONSTRAINT [FK_IngredientId_4c543dea-947e-43e7-aa0f-1a0ef7cee546_Ingredient_effb63e0d86e4ca6bbb7b515a354c574IngredientId] FOREIGN KEY([IngredientId])
            REFERENCES [Ingredient_effb63e0d86e4ca6bbb7b515a354c574] ([IngredientId]),CONSTRAINT [FK_RestBranchId_fa4fcd88-7ede-448e-ad73-4f9c41df14ea_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_ConsumptionTypeId_78c1f008-32ca-4a99-ba21-6b59eafe861c_ConsumptionType_d304157bf7a3446caf2910576b88495fConsumptionTypeId] FOREIGN KEY([ConsumptionTypeId])
            REFERENCES [ConsumptionType_d304157bf7a3446caf2910576b88495f] ([ConsumptionTypeId]))  
GO
CREATE TABLE [RBMasterAccounts]([RBMAID] int IDENTITY(1,1) NOT NULL, 
[RBId] int  NOT NULL, 
[MAId] int  NOT NULL, 
 CONSTRAINT [7dab29cd-811b-4148-9ced-f17320dd0699RBMAID_IsUnique] UNIQUE(RBMAID),CONSTRAINT [7dab29cd-811b-4148-9ced-f17320dd0699RBMAID_IsPrimary] primary key (RBMAID),CONSTRAINT [FK_MAId_548cec71-8d68-47f0-979b-7d6af0b14d46_MasterAccountsMAId] FOREIGN KEY([MAId])
            REFERENCES [MasterAccounts] ([MAId]))  
GO
CREATE TABLE [RBDealCategory_a467bbe004344bf0a3dae59e1053d369]([RBDealCategoryId] int IDENTITY(1,1) NOT NULL, 
[DealCategoryId] int  NOT NULL, 
[RestBranchId] int  NULL, 
 CONSTRAINT [90a4102b-8925-42da-a591-c9ba83d58041RBDealCategoryId_IsUnique] UNIQUE(RBDealCategoryId),CONSTRAINT [90a4102b-8925-42da-a591-c9ba83d58041RBDealCategoryId_IsPrimary] primary key (RBDealCategoryId),CONSTRAINT [FK_DealCategoryId_8f3447e8-cc8a-4fe5-aa98-f46b36d35ed8_DealCategory_09ec523a47bd40809421b877bab1574cDealCategoryId] FOREIGN KEY([DealCategoryId])
            REFERENCES [DealCategory_09ec523a47bd40809421b877bab1574c] ([DealCategoryId]),CONSTRAINT [FK_RestBranchId_b2aab4d1-907c-48e7-84d3-cce42efcd191_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]))  
GO
CREATE TABLE [RBMenu_9eb7de5066f54b63a4696771ae866299]([RBMenuId] int IDENTITY(1,1) NOT NULL, 
[RBMenuName] nvarchar(50)  NOT NULL, 
[RestBranchId] int  NULL, 
[MenuStatusId] int  NOT NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
 CONSTRAINT [7d176987-ea9b-4b1e-9d84-8a4119545527RBMenuId_IsUnique] UNIQUE(RBMenuId),CONSTRAINT [7d176987-ea9b-4b1e-9d84-8a4119545527RBMenuId_IsPrimary] primary key (RBMenuId),CONSTRAINT [FK_RestBranchId_3c60a881-7de1-4bf1-9375-fcbf1d9aff36_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_MenuStatusId_0a0a2e68-c91c-45ed-85c4-04afeb5257cc_MenuStatus_0da48f3c24314dd6a2a44e241b0d1444MenuStatusId] FOREIGN KEY([MenuStatusId])
            REFERENCES [MenuStatus_0da48f3c24314dd6a2a44e241b0d1444] ([MenuStatusId]))  
GO
CREATE TABLE [RBServingType_0aa74fca5d514b8799a090d033a26367]([RBServingTypeId] int IDENTITY(1,1) NOT NULL, 
[RestBranchId] int  NOT NULL, 
[ServingTypeId] int  NULL, 
 CONSTRAINT [ac791e20-246c-4192-bd9f-1230d4f6b8e2RBServingTypeId_IsUnique] UNIQUE(RBServingTypeId),CONSTRAINT [ac791e20-246c-4192-bd9f-1230d4f6b8e2RBServingTypeId_IsPrimary] primary key (RBServingTypeId),CONSTRAINT [FK_RestBranchId_90e430ad-f2c3-4f35-92e7-5b2a0e31e22f_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_ServingTypeId_5cfb780b-80db-48d8-aaa2-c727ad87fae5_ServingType_02efe1c7a0814c02a286d861aeff7eecServingTypeId] FOREIGN KEY([ServingTypeId])
            REFERENCES [ServingType_02efe1c7a0814c02a286d861aeff7eec] ([ServingTypeId]))  
GO
CREATE TABLE [RBUnit_e3b0980628ea4cb2b9b8a9409cd1c9d5]([RBUnitId] int IDENTITY(1,1) NOT NULL, 
[UnitId] int  NULL, 
[RestBranchId] int  NOT NULL, 
[RBUnitStatusId] int  NULL, 
 CONSTRAINT [e8cf7b1b-0df8-4fd7-b358-71f561208435RBUnitId_IsUnique] UNIQUE(RBUnitId),CONSTRAINT [e8cf7b1b-0df8-4fd7-b358-71f561208435RBUnitId_IsPrimary] primary key (RBUnitId),CONSTRAINT [FK_UnitId_64fabe2b-d41c-41e9-9660-7d7a1b5009e1_Unit_b4ca0508501c4de8a0200cbaebcf9ef7UnitId] FOREIGN KEY([UnitId])
            REFERENCES [Unit_b4ca0508501c4de8a0200cbaebcf9ef7] ([UnitId]),CONSTRAINT [FK_RestBranchId_b969c0c4-cc0a-46e6-a8dc-38e60a9b2c71_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_RBUnitStatusId_c6f911a4-713e-4d3d-8501-e24c34b8c42c_RBUnitStatus_981bf31f037d4114a079c907614fc677RBUnitStatusId] FOREIGN KEY([RBUnitStatusId])
            REFERENCES [RBUnitStatus_981bf31f037d4114a079c907614fc677] ([RBUnitStatusId]))  
GO
CREATE TABLE [RBVendor]([RBVendorId] int IDENTITY(1,1) NOT NULL, 
[VId] int  NULL, 
[VendorName] nvarchar(50)  NOT NULL, 
[CurrentBalance] decimal  NOT NULL, 
[RestBranchId] int  NULL, 
[RBAccountId] int  NOT NULL, 
 CONSTRAINT [8c2d34c0-050c-4167-89fe-b9bf3305ba47RBVendorId_IsUnique] UNIQUE(RBVendorId),CONSTRAINT [8c2d34c0-050c-4167-89fe-b9bf3305ba47RBVendorId_IsPrimary] primary key (RBVendorId),CONSTRAINT [FK_VId_20c3f00b-4564-42fa-9602-c23852b97d4d_VendorVId] FOREIGN KEY([VId])
            REFERENCES [Vendor] ([VId]),CONSTRAINT [FK_RestBranchId_9702d288-367d-48c6-8d24-8d6fcb3fce49_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]))  
GO
CREATE TABLE [CookConfiguration]([CookConfigId] int IDENTITY(1,1) NOT NULL, 
[UserId] int  NOT NULL, 
[PreferenceType] nvarchar(50)  NULL, 
[Speciality] nvarchar(50)  NULL, 
 CONSTRAINT [e1ba7ca2-00e1-4836-8149-9b5154d57c9aCookConfigId_IsUnique] UNIQUE(CookConfigId),CONSTRAINT [e1ba7ca2-00e1-4836-8149-9b5154d57c9aCookConfigId_IsPrimary] primary key (CookConfigId),CONSTRAINT [FK_UserId_b70b8e30-7a96-4952-aa1b-1c57af1a2e0a_Users_d25e29029f284e00b51eda96ab0cd491UserId] FOREIGN KEY([UserId])
            REFERENCES [Users_d25e29029f284e00b51eda96ab0cd491] ([UserId]))  
GO
CREATE TABLE [Table_171b2c98ecd347279491645c499b2e54]([TableId] int IDENTITY(1,1) NOT NULL, 
[TableName] nvarchar(50)  NULL, 
[FloorId] int  NULL, 
[LocationX] nvarchar(50)  NULL, 
[locationY] nvarchar(50)  NULL, 
[TableTypeId] int  NULL, 
[TableStatusId] int  NULL, 
 CONSTRAINT [daf25f47-6820-45a4-a527-a14dc29794bbTableId_IsUnique] UNIQUE(TableId),CONSTRAINT [daf25f47-6820-45a4-a527-a14dc29794bbTableId_IsPrimary] primary key (TableId),CONSTRAINT [FK_FloorId_6116cf2e-26ae-4435-8348-fdd20c2bf9b5_Floor_f97756e348cb4b35b6809aa80d78be3bFloorId] FOREIGN KEY([FloorId])
            REFERENCES [Floor_f97756e348cb4b35b6809aa80d78be3b] ([FloorId]),CONSTRAINT [FK_TableTypeId_40f4a1e2-15d2-4e72-91bf-ad692d665fa2_TableTypeTableTypeId] FOREIGN KEY([TableTypeId])
            REFERENCES [TableType] ([TableTypeId]),CONSTRAINT [FK_TableStatusId_c40b66cc-f427-4e44-9f3c-b66bcd695091_TableStatus_cdce1a8fe1a143899ec52c314dbb5611TableStatusId] FOREIGN KEY([TableStatusId])
            REFERENCES [TableStatus_cdce1a8fe1a143899ec52c314dbb5611] ([TableStatusId]))  
GO
CREATE TABLE [IngrediantMovement]([IngMovId] int IDENTITY(1,1) NOT NULL, 
[IngMovTypeId] int  NOT NULL, 
[RBIngredientId] int  NOT NULL, 
[IngQuantity] int  NOT NULL, 
 CONSTRAINT [1c6583c0-a8cc-48e1-9451-5935917fd51fIngMovId_IsUnique] UNIQUE(IngMovId),CONSTRAINT [1c6583c0-a8cc-48e1-9451-5935917fd51fIngMovId_IsPrimary] primary key (IngMovId),CONSTRAINT [FK_IngMovTypeId_dcb9e41e-95ff-410d-9bab-6ec5b61e85d4_IngMovTypeIngMovTypeId] FOREIGN KEY([IngMovTypeId])
            REFERENCES [IngMovType] ([IngMovTypeId]),CONSTRAINT [FK_RBIngredientId_f2fdb21d-1271-4b29-a0eb-db9cb4445faa_RBIngriedient_bda7262c64354cf385543cf8110dbc3bRBIngredientId] FOREIGN KEY([RBIngredientId])
            REFERENCES [RBIngriedient_bda7262c64354cf385543cf8110dbc3b] ([RBIngredientId]))  
GO
CREATE TABLE [IngredientStockIn_84c43357f1a649f096ef1cda39b6e8bb]([StockId] int IDENTITY(1,1) NOT NULL, 
[RBIngredient] int  NULL, 
[Quantity] int  NULL, 
[RBUnitId] int  NULL, 
 CONSTRAINT [8fb70676-f17e-4bc0-b5b3-415b88d0a072StockId_IsUnique] UNIQUE(StockId),CONSTRAINT [8fb70676-f17e-4bc0-b5b3-415b88d0a072StockId_IsPrimary] primary key (StockId),CONSTRAINT [FK_RBUnitId_268d07f9-c81e-42c6-ac3e-79138a115cc1_RBUnit_e3b0980628ea4cb2b9b8a9409cd1c9d5RBUnitId] FOREIGN KEY([RBUnitId])
            REFERENCES [RBUnit_e3b0980628ea4cb2b9b8a9409cd1c9d5] ([RBUnitId]))  
GO
CREATE TABLE [PageHit]([Id] int IDENTITY(1,1) NOT NULL, 
[UserId] int  NULL, 
[ActionParameters] nvarchar(MAX)  NULL, 
[Controller] nvarchar(50)  NULL, 
[Action] nvarchar(50)  NULL, 
[HitTime] datetime  NULL, 
 CONSTRAINT [d9f7194e-fa0a-49c8-bc43-50b88abf3c0cId_IsUnique] UNIQUE(Id),CONSTRAINT [d9f7194e-fa0a-49c8-bc43-50b88abf3c0cId_IsPrimary] primary key (Id),CONSTRAINT [FK_UserId_f00524fd-997e-463b-aa11-1b8ce12ac204_Users_d25e29029f284e00b51eda96ab0cd491UserId] FOREIGN KEY([UserId])
            REFERENCES [Users_d25e29029f284e00b51eda96ab0cd491] ([UserId]))  
GO
CREATE TABLE [RB_Person_53018d0e28d941f69fbb989881826156]([RBPersonId] int IDENTITY(1,1) NOT NULL, 
[PersonId] int  NULL, 
[RestBranchId] int  NULL, 
[RBDesignationId] int  NULL, 
 CONSTRAINT [328e4048-9e6c-4a00-a4e0-42f8213d7cb2RBPersonId_IsUnique] UNIQUE(RBPersonId),CONSTRAINT [328e4048-9e6c-4a00-a4e0-42f8213d7cb2RBPersonId_IsPrimary] primary key (RBPersonId),CONSTRAINT [FK_PersonId_79f8219e-d8a1-4d0c-b5c0-e4275e294366_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]),CONSTRAINT [FK_RestBranchId_eb6b96cf-aefd-4659-9184-38aabd5483e2_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_RBDesignationId_4989d030-5d4f-4941-ab36-fa7b293ab4d5_RBDesignation_154d8039edf7436fb69f5a62f34fbad7RBDesignationId] FOREIGN KEY([RBDesignationId])
            REFERENCES [RBDesignation_154d8039edf7436fb69f5a62f34fbad7] ([RBDesignationId]))  
GO
CREATE TABLE [RBDishPrice_b8447959fb7347a0bac6650b850aea0d]([RBDishPriceId] int IDENTITY(1,1) NOT NULL, 
[RBDishId] int  NOT NULL, 
[Price] int  NOT NULL, 
[FromDate] datetime2(7)  NULL, 
[ToDate] datetime2(7)  NULL, 
 CONSTRAINT [9a529f17-7ad0-4f2d-a2a0-ae50f3d51d51RBDishPriceId_IsUnique] UNIQUE(RBDishPriceId),CONSTRAINT [9a529f17-7ad0-4f2d-a2a0-ae50f3d51d51RBDishPriceId_IsPrimary] primary key (RBDishPriceId),CONSTRAINT [FK_RBDishId_e10e517f-1bfa-4fcf-bb1e-3af17ee75d66_RBDish_156799924bc94bfba820d162b9ca718dRBDishId] FOREIGN KEY([RBDishId])
            REFERENCES [RBDish_156799924bc94bfba820d162b9ca718d] ([RBDishId]))  
GO
CREATE TABLE [RBDishRBIngredient_d6508f7f7c8b4907b5416a52cf9dc0e6]([RBDishRBIngredientId] int IDENTITY(1,1) NOT NULL, 
[RBDishId] int  NOT NULL, 
[RBIngredientId] int  NOT NULL, 
[IngredientQty] decimal  NULL, 
[RBUnitId] int  NOT NULL, 
[RBDishRBIngredientStatusId] int  NULL, 
 CONSTRAINT [e0dc12ad-0239-470a-b49d-08b25ff2452fRBDishRBIngredientId_IsUnique] UNIQUE(RBDishRBIngredientId),CONSTRAINT [e0dc12ad-0239-470a-b49d-08b25ff2452fRBDishRBIngredientId_IsPrimary] primary key (RBDishRBIngredientId),CONSTRAINT [FK_RBDishId_215b4adf-f6f5-4520-91cb-e2191783e59f_RBDish_156799924bc94bfba820d162b9ca718dRBDishId] FOREIGN KEY([RBDishId])
            REFERENCES [RBDish_156799924bc94bfba820d162b9ca718d] ([RBDishId]),CONSTRAINT [FK_RBIngredientId_d5edfa18-e838-40f5-b64d-582abbafb411_RBIngriedient_bda7262c64354cf385543cf8110dbc3bRBIngredientId] FOREIGN KEY([RBIngredientId])
            REFERENCES [RBIngriedient_bda7262c64354cf385543cf8110dbc3b] ([RBIngredientId]),CONSTRAINT [FK_RBUnitId_889b5e0a-5213-4f26-98b1-fb735b1641ba_RBUnit_e3b0980628ea4cb2b9b8a9409cd1c9d5RBUnitId] FOREIGN KEY([RBUnitId])
            REFERENCES [RBUnit_e3b0980628ea4cb2b9b8a9409cd1c9d5] ([RBUnitId]),CONSTRAINT [FK_RBDishRBIngredientStatusId_49b4c9eb-9f0c-4201-9963-32d4dc3fa041_RBDishRBIngredientStatus_5f3188afbaab4cf19f8f936a51e9cf45RBDi] FOREIGN KEY([RBDishRBIngredientStatusId])
            REFERENCES [RBDishRBIngredientStatus_5f3188afbaab4cf19f8f936a51e9cf45] ([RBDishRBIngredientStatusId]))  
GO
CREATE TABLE [RBDeal_1c587f8e05a848cfb7c1601158d377d4]([RBDealId] int IDENTITY(1,1) NOT NULL, 
[RestBranchId] int  NOT NULL, 
[RBDealName] nvarchar(50)  NULL, 
[RBDealStatus] int  NULL, 
[RBDealImage] nvarchar(MAX)  NULL, 
[RBDealImage2] nvarchar(MAX)  NULL, 
[RBDealDescription] nvarchar(MAX)  NULL, 
[RBDealGenereID] int  NULL, 
[RBDealCategoryID] int  NULL, 
[RBServingTypeId] int  NULL, 
 CONSTRAINT [d4b81d34-f7ad-4cad-a257-5728202d0de0RBDealId_IsUnique] UNIQUE(RBDealId),CONSTRAINT [d4b81d34-f7ad-4cad-a257-5728202d0de0RBDealId_IsPrimary] primary key (RBDealId),CONSTRAINT [FK_RestBranchId_8333ecd1-4f28-47b3-97a3-7bd203e50ab5_RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57RestBranchId] FOREIGN KEY([RestBranchId])
            REFERENCES [RestaurantBranch_da3ae5e5f8e64ea882da3cbc7e67fb57] ([RestBranchId]),CONSTRAINT [FK_RBServingTypeId_f57f9441-2be1-43e9-add2-12279544c75f_RBServingType_0aa74fca5d514b8799a090d033a26367RBServingTypeId] FOREIGN KEY([RBServingTypeId])
            REFERENCES [RBServingType_0aa74fca5d514b8799a090d033a26367] ([RBServingTypeId]))  
GO
CREATE TABLE [RBMenuRepeatative_e8191a4b33804ea08c35bb7a27c3d7b0]([RBMenuRepeatativeId] int IDENTITY(1,1) NOT NULL, 
[RepeatativeTypeId] int  NULL, 
[RBMenuId] int  NULL, 
[FromDate] datetime2(7)  NULL, 
[ToDate] datetime2(7)  NULL, 
[OnDays] nvarchar(50)  NULL, 
 CONSTRAINT [f7487f0e-5be5-4a5c-9b7d-4125845cb11fRBMenuRepeatativeId_IsUnique] UNIQUE(RBMenuRepeatativeId),CONSTRAINT [f7487f0e-5be5-4a5c-9b7d-4125845cb11fRBMenuRepeatativeId_IsPrimary] primary key (RBMenuRepeatativeId),CONSTRAINT [FK_RepeatativeTypeId_21ccfed6-7be9-40ec-8e66-9d6ef88101af_RepeatativeType_6b6a389c1cdf492c881e92b2484e9068RepeatativeTypeId] FOREIGN KEY([RepeatativeTypeId])
            REFERENCES [RepeatativeType_6b6a389c1cdf492c881e92b2484e9068] ([RepeatativeTypeId]),CONSTRAINT [FK_RBMenuId_31398811-915e-4893-ae6f-078312570b90_RBMenu_9eb7de5066f54b63a4696771ae866299RBMenuId] FOREIGN KEY([RBMenuId])
            REFERENCES [RBMenu_9eb7de5066f54b63a4696771ae866299] ([RBMenuId]))  
GO
CREATE TABLE [CookCategorySpeciality]([CCSpeciality] int IDENTITY(1,1) NOT NULL, 
[CookConfigId] int  NOT NULL, 
[RBDealCategoryId] int  NOT NULL, 
 CONSTRAINT [b6158ebf-f806-4541-a8b8-b0dd63bf00efCCSpeciality_IsUnique] UNIQUE(CCSpeciality),CONSTRAINT [b6158ebf-f806-4541-a8b8-b0dd63bf00efCCSpeciality_IsPrimary] primary key (CCSpeciality),CONSTRAINT [FK_CookConfigId_71a13b5c-91e8-43ea-ae83-5f7d5d543ad9_CookConfigurationCookConfigId] FOREIGN KEY([CookConfigId])
            REFERENCES [CookConfiguration] ([CookConfigId]),CONSTRAINT [FK_RBDealCategoryId_4be91ba6-2278-4dd4-8656-d83c296665bd_RBDealCategory_a467bbe004344bf0a3dae59e1053d369RBDealCategoryId] FOREIGN KEY([RBDealCategoryId])
            REFERENCES [RBDealCategory_a467bbe004344bf0a3dae59e1053d369] ([RBDealCategoryId]))  
GO
CREATE TABLE [CookGenreSpeciality]([CGSpeciality] int IDENTITY(1,1) NOT NULL, 
[CookConfigId] int  NOT NULL, 
[RBDealGenreId] int  NOT NULL, 
 CONSTRAINT [b947b9f1-f90a-4360-884b-5920c12f0af4CGSpeciality_IsUnique] UNIQUE(CGSpeciality),CONSTRAINT [b947b9f1-f90a-4360-884b-5920c12f0af4CGSpeciality_IsPrimary] primary key (CGSpeciality),CONSTRAINT [FK_CookConfigId_bffee7af-d182-4605-b9c6-746a06f429ed_CookConfigurationCookConfigId] FOREIGN KEY([CookConfigId])
            REFERENCES [CookConfiguration] ([CookConfigId]),CONSTRAINT [FK_RBDealGenreId_37af0efa-b112-42ba-9f78-c39701962455_RBDealGenre_2529fb79f4d042b592c1ef86ab69b133RBDealGenreId] FOREIGN KEY([RBDealGenreId])
            REFERENCES [RBDealGenre_2529fb79f4d042b592c1ef86ab69b133] ([RBDealGenreId]))  
GO
CREATE TABLE [UserTable_0db335fb744e4e10b178ac5d76846655]([UserTableId] int IDENTITY(1,1) NOT NULL, 
[TableId] int  NULL, 
[UserId] int  NULL, 
 CONSTRAINT [baa2d4e0-521d-4808-95b7-2c0fc3780909UserTableId_IsUnique] UNIQUE(UserTableId),CONSTRAINT [baa2d4e0-521d-4808-95b7-2c0fc3780909UserTableId_IsPrimary] primary key (UserTableId),CONSTRAINT [FK_TableId_2894b315-2c4c-464d-ae2a-d9d87e23648d_Table_171b2c98ecd347279491645c499b2e54TableId] FOREIGN KEY([TableId])
            REFERENCES [Table_171b2c98ecd347279491645c499b2e54] ([TableId]),CONSTRAINT [FK_UserId_9a19ec39-f1b4-471a-a5e6-06723d111f84_Users_d25e29029f284e00b51eda96ab0cd491UserId] FOREIGN KEY([UserId])
            REFERENCES [Users_d25e29029f284e00b51eda96ab0cd491] ([UserId]))  
GO
CREATE TABLE [VendorPerson]([VendorPersonId] int IDENTITY(1,1) NOT NULL, 
[RBVendorId] int  NOT NULL, 
[PersonId] int  NOT NULL, 
 CONSTRAINT [48047ebc-5dee-4345-aa40-bbbdea55a2a6VendorPersonId_IsUnique] UNIQUE(VendorPersonId),CONSTRAINT [48047ebc-5dee-4345-aa40-bbbdea55a2a6VendorPersonId_IsPrimary] primary key (VendorPersonId),CONSTRAINT [FK_RBVendorId_e3300558-2060-479f-b829-b0b9594e149d_RBVendorRBVendorId] FOREIGN KEY([RBVendorId])
            REFERENCES [RBVendor] ([RBVendorId]),CONSTRAINT [FK_PersonId_efb90685-cc00-4900-ab91-f57da87d85c6_Person_3820778b1c784a498d956d7fcd1b997aPersonId] FOREIGN KEY([PersonId])
            REFERENCES [Person_3820778b1c784a498d956d7fcd1b997a] ([PersonId]))  
GO
CREATE TABLE [Purchase]([PurchaseId] int IDENTITY(1,1) NOT NULL, 
[RBVendorId] int  NOT NULL, 
[PurchaseDate] datetime  NOT NULL, 
[RBId] int  NOT NULL, 
 CONSTRAINT [b83f9b8e-14d4-4869-a355-e9bceb67624ePurchaseId_IsUnique] UNIQUE(PurchaseId),CONSTRAINT [b83f9b8e-14d4-4869-a355-e9bceb67624ePurchaseId_IsPrimary] primary key (PurchaseId),CONSTRAINT [FK_RBVendorId_9f9bdbd0-4da1-4647-b33a-c6ecbe8c6344_RBVendorRBVendorId] FOREIGN KEY([RBVendorId])
            REFERENCES [RBVendor] ([RBVendorId]))  
GO
CREATE TABLE [RBDealOptionsOnRbDeal]([RBDealOptionsOnRbDealId] int IDENTITY(1,1) NOT NULL, 
[RBDealId] int  NULL, 
[RBDealOptionId] int  NULL, 
[IsCompulsory] bit  NULL, 
[RBDealOptionTypeId] int  NULL, 
 CONSTRAINT [60e69f48-a126-4119-bcd9-a66b2712ac34RBDealOptionsOnRbDealId_IsUnique] UNIQUE(RBDealOptionsOnRbDealId),CONSTRAINT [60e69f48-a126-4119-bcd9-a66b2712ac34RBDealOptionsOnRbDealId_IsPrimary] primary key (RBDealOptionsOnRbDealId),CONSTRAINT [FK_RBDealId_c658d6da-80eb-48e0-93d7-704481cf4318_RBDeal_1c587f8e05a848cfb7c1601158d377d4RBDealId] FOREIGN KEY([RBDealId])
            REFERENCES [RBDeal_1c587f8e05a848cfb7c1601158d377d4] ([RBDealId]),CONSTRAINT [FK_RBDealOptionId_9fb890cc-42c1-4f7d-b2df-23aebe359d8b_RBDealOptionRBDealOptionId] FOREIGN KEY([RBDealOptionId])
            REFERENCES [RBDealOption] ([RBDealOptionId]),CONSTRAINT [FK_RBDealOptionTypeId_c845e869-1672-4b54-842d-f7c54d718b95_RBDealOptionTypeRBDealOptionTypeId] FOREIGN KEY([RBDealOptionTypeId])
            REFERENCES [RBDealOptionType] ([RBDealOptionTypeId]))  
GO
CREATE TABLE [Order_ca4962ebc25447cfa747843c272ca5e1]([OId] int IDENTITY(1,1) NOT NULL, 
[ODate] datetime  NOT NULL, 
[TableId] int  NOT NULL, 
[OrderBy] int  NOT NULL, 
[OrderStatus] int  NOT NULL, 
[OrderAmount] int  NOT NULL, 
[Name] nvarchar(100)  NULL, 
[PhoneNumber] nvarchar(50)  NULL, 
[Address] nvarchar(500)  NULL, 
 CONSTRAINT [6e1b2084-3a1f-44fa-99b7-279248604ab4OId_IsUnique] UNIQUE(OId),CONSTRAINT [6e1b2084-3a1f-44fa-99b7-279248604ab4OId_IsPrimary] primary key (OId),CONSTRAINT [FK_TableId_c995235d-8b11-4bb6-b1e5-d9d90a2c19e5_Table_171b2c98ecd347279491645c499b2e54TableId] FOREIGN KEY([TableId])
            REFERENCES [Table_171b2c98ecd347279491645c499b2e54] ([TableId]))  
GO
CREATE TABLE [RBDealDish_c396bc74d4bf4c66a2e9ee034512d904]([RBDealDishId] int IDENTITY(1,1) NOT NULL, 
[RBDealId] int  NOT NULL, 
[RBDishId] int  NOT NULL, 
[RBDishQuantity] int  NULL, 
 CONSTRAINT [fa2f6501-5456-434d-be99-fdd2bedcd0c3RBDealDishId_IsUnique] UNIQUE(RBDealDishId),CONSTRAINT [fa2f6501-5456-434d-be99-fdd2bedcd0c3RBDealDishId_IsPrimary] primary key (RBDealDishId),CONSTRAINT [FK_RBDealId_a2207780-f2e0-439c-9ec7-00ae31f2e0cb_RBDeal_1c587f8e05a848cfb7c1601158d377d4RBDealId] FOREIGN KEY([RBDealId])
            REFERENCES [RBDeal_1c587f8e05a848cfb7c1601158d377d4] ([RBDealId]),CONSTRAINT [FK_RBDishId_66c14b14-d5ac-4e70-89be-25ae2560425e_RBDish_156799924bc94bfba820d162b9ca718dRBDishId] FOREIGN KEY([RBDishId])
            REFERENCES [RBDish_156799924bc94bfba820d162b9ca718d] ([RBDishId]))  
GO
CREATE TABLE [RBMenuRBDeal_bc963fdfe92a45a5a3227df71b4717ec]([RBMenuRBDishId] int IDENTITY(1,1) NOT NULL, 
[RBMenuId] int  NOT NULL, 
[RBDealId] int  NOT NULL, 
 CONSTRAINT [123b3dda-80a3-4b49-a2f9-88d5f152eecdRBMenuRBDishId_IsUnique] UNIQUE(RBMenuRBDishId),CONSTRAINT [123b3dda-80a3-4b49-a2f9-88d5f152eecdRBMenuRBDishId_IsPrimary] primary key (RBMenuRBDishId),CONSTRAINT [FK_RBMenuId_28fea58c-f2a6-42dd-8c5a-6e565dca8e96_RBMenu_9eb7de5066f54b63a4696771ae866299RBMenuId] FOREIGN KEY([RBMenuId])
            REFERENCES [RBMenu_9eb7de5066f54b63a4696771ae866299] ([RBMenuId]),CONSTRAINT [FK_RBDealId_75e36f0b-5d46-49b9-ae99-fd2119b6e4fe_RBDeal_1c587f8e05a848cfb7c1601158d377d4RBDealId] FOREIGN KEY([RBDealId])
            REFERENCES [RBDeal_1c587f8e05a848cfb7c1601158d377d4] ([RBDealId]))  
GO
CREATE TABLE [RBDealPrice_a55e828670174fbda96ea8174fe146c0]([RBDealPriceId] int IDENTITY(1,1) NOT NULL, 
[RBDealId] int  NOT NULL, 
[Price] int  NOT NULL, 
[RBPriceTypeId] int  NULL, 
[CreatedBy] int  NULL, 
[ModifiedBy] int  NULL, 
[FromDate] datetime2(7)  NULL, 
[ToDate] datetime2(7)  NULL, 
 CONSTRAINT [25a6a621-d45c-4aac-9adb-03b9e6006242RBDealPriceId_IsUnique] UNIQUE(RBDealPriceId),CONSTRAINT [25a6a621-d45c-4aac-9adb-03b9e6006242RBDealPriceId_IsPrimary] primary key (RBDealPriceId),CONSTRAINT [FK_RBDealId_55c8d89b-0a25-4608-8f27-d62009ca1055_RBDeal_1c587f8e05a848cfb7c1601158d377d4RBDealId] FOREIGN KEY([RBDealId])
            REFERENCES [RBDeal_1c587f8e05a848cfb7c1601158d377d4] ([RBDealId]),CONSTRAINT [FK_RBPriceTypeId_b1bc2ef2-c06a-41a7-b378-51414e435f74_RBPriceTypeRBPriceTypeId] FOREIGN KEY([RBPriceTypeId])
            REFERENCES [RBPriceType] ([RBPriceTypeId]))  
GO
CREATE TABLE [PurchaseDetails]([PurchaseDetailsId] int IDENTITY(1,1) NOT NULL, 
[PurchaseId] int  NOT NULL, 
[IngMovId] int  NOT NULL, 
[ExpiryDate] date  NOT NULL, 
[Quantity] nchar(10)  NULL, 
[Rate] decimal  NOT NULL, 
 CONSTRAINT [b0c0e183-90f3-41bc-885a-e6e698ceea2fPurchaseDetailsId_IsUnique] UNIQUE(PurchaseDetailsId),CONSTRAINT [b0c0e183-90f3-41bc-885a-e6e698ceea2fPurchaseDetailsId_IsPrimary] primary key (PurchaseDetailsId),CONSTRAINT [FK_PurchaseId_6b9a3fe8-52b6-4a96-b847-551a7745c49f_PurchasePurchaseId] FOREIGN KEY([PurchaseId])
            REFERENCES [Purchase] ([PurchaseId]),CONSTRAINT [FK_IngMovId_079b2ed8-dd74-448e-89c6-a43f94dfafb6_IngrediantMovementIngMovId] FOREIGN KEY([IngMovId])
            REFERENCES [IngrediantMovement] ([IngMovId]))  
GO
CREATE TABLE [OrderDetails_33e1f3d677a9484a818d38868c5db386]([ODId] int IDENTITY(1,1) NOT NULL, 
[RelatedODId] int  NULL, 
[OId] int  NOT NULL, 
[RBDealId] int  NOT NULL, 
[RBDealQty] int  NOT NULL, 
[ODStatusId] int  NULL, 
[CookId] int  NULL, 
[Comments] nvarchar(500)  NULL, 
 CONSTRAINT [d107c76c-0f8c-4c24-b0e6-b9cb4e4c534cODId_IsUnique] UNIQUE(ODId),CONSTRAINT [d107c76c-0f8c-4c24-b0e6-b9cb4e4c534cODId_IsPrimary] primary key (ODId),CONSTRAINT [FK_OId_f110d676-33c6-43ef-b481-16058d93103f_Order_ca4962ebc25447cfa747843c272ca5e1OId] FOREIGN KEY([OId])
            REFERENCES [Order_ca4962ebc25447cfa747843c272ca5e1] ([OId]),CONSTRAINT [FK_RBDealId_2831a555-50ac-4d31-8597-486db73266da_RBDeal_1c587f8e05a848cfb7c1601158d377d4RBDealId] FOREIGN KEY([RBDealId])
            REFERENCES [RBDeal_1c587f8e05a848cfb7c1601158d377d4] ([RBDealId]))  
GO
CREATE TABLE [OrderRBDealOption]([OrderRBDealOptionId] int IDENTITY(1,1) NOT NULL, 
[ODId] int  NULL, 
[RBDealOptionId] int  NULL, 
[DetailGUID] nvarchar(40)  NULL, 
[RBDealOptionTypeId] int  NULL, 
 CONSTRAINT [a4c51457-1d70-41a6-8ce0-96ad55d22205OrderRBDealOptionId_IsUnique] UNIQUE(OrderRBDealOptionId),CONSTRAINT [a4c51457-1d70-41a6-8ce0-96ad55d22205OrderRBDealOptionId_IsPrimary] primary key (OrderRBDealOptionId),CONSTRAINT [FK_ODId_8b1f8fc4-1a84-4986-bebe-125ef447e2d2_OrderDetails_33e1f3d677a9484a818d38868c5db386ODId] FOREIGN KEY([ODId])
            REFERENCES [OrderDetails_33e1f3d677a9484a818d38868c5db386] ([ODId]),CONSTRAINT [FK_RBDealOptionId_c3e622db-510f-48f6-9c93-e8bc1d48f6b4_RBDealOptionRBDealOptionId] FOREIGN KEY([RBDealOptionId])
            REFERENCES [RBDealOption] ([RBDealOptionId]))  
GO
`.substr(0,367);
let helper = require('./../js/touchstone/components/extension/modules/mssql/mssqlhelper')

let db ="Server=PHEECA\\SQLEXPRESS2016;Database=erobtest2;User id=sa;password=password1;"
console.log(query)
 await helper.getData(db, query,true)