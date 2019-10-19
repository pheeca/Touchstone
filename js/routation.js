



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
            name:"Setup User Dev Environment"
        }]
    },{
        name:"Project Config",
        submenu:[{
            name:"Properties"
        },{
            name:"Modules"
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
            name:"DB Entities"
        },{
            name:"Stored Proc"
        }]
    },{
        name:"API Generation"
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