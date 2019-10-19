let menuEl =null;
let openMenuCtrl = null;
let closeMenuCtrl = null;
let res = [];
function main(){
    
	loadMenu();
	setupMenu();
}
function getMenuData(){
	return [{
		name:"All",
		submenu:[{
			name:"Vegetables",
			submenu:[{
				name:"Stalk Vegetables",
				loader:function(){
					debugger
				}
			},{
				name:"Roots &amp; Seeds"
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
	}];
}
function loadMenu(){
	let MenuData = getMenuData();
	MenuData.forEach((element,index) => {
		setMenuindex(element,'index',index);
	});
	MenuData.forEach((element) => {
		setMenuTemplate(element);
	});
	res=[];
	const cb = (e) => {
		res.push({
			Id: e.Id,
			name: e.name,
			loader:e.loader
		});
		e.submenu && e.submenu.forEach(cb);
	}
	MenuData.forEach(cb);
	console.log(res);
}

function setMenuindex(MenuItem,prefix,index){
	MenuItem.Id = prefix+'-'+(index+1);
	if((MenuItem.submenu||[]).length>0){
		MenuItem.submenu.forEach((element,index) => {
			setMenuindex(element,MenuItem.Id,index)
		});
	}
	
}
function setMenuTemplate(MenuItem){
	let t = `<ul ${(MenuItem.submenu||[]).length > 0 ? `data-menu="${MenuItem.Id}"`:""} class="menu__level" tabindex="-1" role="menu" aria-label="${MenuItem.name}">
	${(MenuItem.submenu||[]).map(e=>
		`<li class="menu__item" role="menuitem">
		<a class="menu__link" data-itemId="${e.Id}" href="#" ${(e.submenu||[]).length > 0 ? `data-submenu="${e.Id}" aria-owns="${e.Id}"`:``}>${e.name}</a></li>`
		).join('')}
	</ul>`;
	$('.menu__wrap').append(t);
	(MenuItem.submenu||[]).filter(e=>(e.submenu||[]).length>0).forEach(setMenuTemplate);
}
function setupMenu(){
	menuEl = document.getElementById('ml-menu'),
	mlmenu = new MLMenu(menuEl, {
		// breadcrumbsCtrl : true, // show breadcrumbs
		// initialBreadcrumb : 'all', // initial breadcrumb text
		backCtrl : false, // show back button
		// itemsDelayInterval : 60, // delay between each menu item sliding animation
		onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
	});

// mobile menu toggle
 openMenuCtrl = document.querySelector('.action--open'),
	closeMenuCtrl = document.querySelector('.action--close');

openMenuCtrl.addEventListener('click', openMenu);
closeMenuCtrl.addEventListener('click', closeMenu);
}
function openMenu() {
	classie.add(menuEl, 'menu--open');
	closeMenuCtrl.focus();
}

function closeMenu() {
	classie.remove(menuEl, 'menu--open');
	openMenuCtrl.focus();
}

// simulate grid content loading
var gridWrapper = document.querySelector('.content');

function loadDummyData(ev, itemName) {
	ev.preventDefault();
	closeMenu();
	gridWrapper.innerHTML = '';
	classie.add(gridWrapper, 'content--loading');
	setTimeout(function() {
		classie.remove(gridWrapper, 'content--loading');
		let item = res.filter(r=>r.Id==$(ev.target).data('itemid'))[0];
		if(item.loader){
			item.loader(ev);
		}
		//gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
	}, 700);
}
