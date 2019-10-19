



let routation = [{
    name:"All",
    submenu:[{
        name:"Dev Environment",
        submenu:[{
            name:"Create Users",
            loader:function(){
                $(`.content`).html(`<ul class="products"><li class=\"product\"><div class=\"foodicon foodicon--broccoli\"></div></li></ul>`);
            }
        },{
            name:"Setup User Dev Environment"
        },{
            name:"Cabbages"
        },{
            name:"Salad Greens"
        },{
            name:"Mushrooms"
        },{
            name:"Sale %",
            submenu:[{
                name:"Fair Trade Roots"
            },{
                name:"Dried Veggies"
            },{
                name:"Our Brand"
            },{
                name:"Homemade"
            }]
        }]
    },{
        name:"Fruits",
        submenu:[{
            name:"Citrus Fruits"
        },{
            name:"Berries"
        },{
            name:"Special Selection",
            submenu:[{
                name:"Exotic Mixes"
            },{
                name:"Wild Pick"
            },{
                name:"Vitamin Boosters"
            }]
        },{
            name:"Tropical Fruits"
        },{
            name:"Melons"
        }]
    },{
        name:"Grains",
        submenu:[{
            name:"Buckwheat"
        },{
            name:"Millet"
        },{
            name:"Quinoa"
        },{
            name:"Wild Rice"
        },{
            name:"Durum Wheat"
        },{
            name:"Promo Packs",
            submenu:[{
                name:"Starter Kit"
            },{
                name:"The Essential 8"
            },{
                name:"Bolivian Secrets"
            },{
                name:"Flour Packs"
            }]
        }]
    },{
        name:"Mylk &amp; Drinks",
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
    },{
        name:"abc"
    }]
}]