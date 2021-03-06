



let routation = [{
    name:"All",
    submenu:[{
        name:"Dev Environment",
        submenu:[{
            name:"Create Users",
            loader:function(){
                createUserInit();
            }
        },{
            name:"Setup User Dev Environment",
            loader:function(){
                setupDevEnvInit();
            }
        }]
    },{
        name:"Project Config",
        submenu:[{
            name:"Properties"
        },{
            name:"Modules",
            loader:function(){
                setupModulesInit();
            }
        },{
            name:"Advance Config",
            submenu:[{
                name:"Multi-Tenancy"
            },{
                name:"Audit"
            }]
        },{
            name:"Stack",
            submenu:[{
                name:"Database"
            },{
                name:"Back-End"
            },{
                name:"Front End"
            }]
        }]
    },{
        name:"Modelling",
        submenu:[{
            name:"DB Entities",
            loader:function(){
                setupdbEntities();
            }
        },{
            name:"DB Entities Data",
            loader:function(){
                setupdbEntitiesData();
            }
        },{
            name:"URM Configuration",
            loader:function(){
                setupURMConfiguration();
            }
        },{
            name:"Stored Proc"
        }]
    },{
        name:"API Generation",
        submenu:[{
            name:"Endpoint Configuration",
            loader:function(){
                endpointConfiguration();
            }
        }]
    },{
        name:"Code Generation",
        submenu:[{
            name:"Grain Mylks"
        },{
            name:"Seed Mylks"
        },{
            name:"Nut Mylks"
        },{
            name:"Nutri Mylks"
        },{
            name:"Selection",
            submenu:[{
                name:"Nut Mylk Packs"
            },{
                name:"Amino Acid Heaven"
            },{
                name:"Allergy Free"
            }]
        }]
    }]
}]