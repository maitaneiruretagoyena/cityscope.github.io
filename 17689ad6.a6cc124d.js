(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),b=a(6),r=(a(0),a(81)),l={id:"Schema"},i={unversionedId:"archive/Schema",id:"archive/Schema",isDocsHomePage:!1,title:"Schema",description:"CityIO Data Structure Standard version 2.1 [2018]",source:"@site/docs/archive/schema_archive.md",slug:"/archive/Schema",permalink:"/docs/archive/Schema",editUrl:"https://github.com/CityScope/cityscope.github.io/docs/archive/schema_archive.md",version:"current",sidebar:"sidebar",previous:{title:"Brix",permalink:"/docs/modules/brix/Brix"},next:{title:"Specs",permalink:"/docs/archive/Specs"}},c=[{value:"CityIO Data Structure Standard version 2.1 2018",id:"cityio-data-structure-standard-version-21-2018",children:[]},{value:"cityIO example data format",id:"cityio-example-data-format",children:[]},{value:"Example of 20 x 20 grid",id:"example-of-20-x-20-grid",children:[]},{value:"<code>header</code> (dictionary)",id:"header-dictionary",children:[]},{value:"<code>meta [auto-generated by server]</code>",id:"meta-auto-generated-by-server",children:[]},{value:"<code>grid</code>(Array or arrays)",id:"gridarray-or-arrays",children:[]},{value:"<code>objects</code>",id:"objects",children:[]},{value:"version 1.0",id:"version-10",children:[]},{value:"Enum for types",id:"enum-for-types",children:[]},{value:"Density Number",id:"density-number",children:[]},{value:"Energy Consumption (Buildings)",id:"energy-consumption-buildings",children:[]},{value:"CO2 Production (Buildings)",id:"co2-production-buildings",children:[]},{value:"Energy Consumption (Mobility)",id:"energy-consumption-mobility",children:[]},{value:"CO2 Production (Mobility)",id:"co2-production-mobility",children:[]}],o={rightToc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"cityio-data-structure-standard-version-21-2018"},"CityIO Data Structure Standard version 2.1 ","[2018]"),Object(r.b)("h3",{id:"cityio-example-data-format"},"cityIO example data format"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{"error":"","grid":[[1,0,270],[0,7,270]...[0,8,90],[4,5,90]],"id":"","objects":{},"timestamp":1528717938368,"meta":{"id":"hnkyCam","timestamp":1528717938347,"apiv":2},"header":{"spatial":{"physical_longitude":-71.087264,"cellsize":10,"longitude":-71.087264,"rotation":217,"nrows":5,"latitude":42.360357,"ncols":7,"physical_latitude":42.360357},"name":"virtual_table","block":["type","height","rotation"],"mapping":{"type":{"0":"RL","1":"RM","2":"RS","3":"OL","4":"OM","5":"OS","6":"ROAD"}},"owner":{"name":"Yasushi Sakai","title":"Research Assistant","institute":"MIT Media Lab"}}}\n')),Object(r.b)("h3",{id:"example-of-20-x-20-grid"},"Example of 20 x 20 grid"),Object(r.b)("p",null,"An example of this version could be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cityio.media.mit.edu/api/table/virtual_table"}),"here (online)")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CityScope/CS_CityIO_Backend/blob/master/examples/virtual_table.json"}),"here (offline)"),"\nNote that this format is a minimal protocol. It's ok to have additional information in different tables.\n",Object(r.b)("em",{parentName:"p"},"fields with ","*"," are optional.")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"fields"},"Fields"),Object(r.b)("h4",{id:"note--before-a-field-reflects-optionalsuggested-data"},"Note: ","*"," before a field reflects optional/suggested data"),Object(r.b)("h3",{id:"header-dictionary"},Object(r.b)("inlineCode",{parentName:"h3"},"header")," (dictionary)"),Object(r.b)("p",null,"Contains global data that explains the rest of the data. The header data should be defined for each table, and it is unlikely to change through different states."),Object(r.b)("h4",{id:"name-string"},Object(r.b)("inlineCode",{parentName:"h4"},"name")," (string)"),Object(r.b)("p",null,"the name of the table. It is the unique key and should match the regex /\\w+/g (","[0-9a-zA-Z_]",")."),Object(r.b)("h4",{id:"spatial-dictionary"},Object(r.b)("inlineCode",{parentName:"h4"},"spatial")," (dictionary)"),Object(r.b)("p",null,"Contains spatial data that indicates the size, location and the physical resolution of the table data."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"row")," (unsigned short): the number of rows for the table"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"column")," (unsigned short): the number of columns for the table"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"latitude")," (double): latitude value in decimals. The table's origin is the north west corner."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"longitude")," (double): longitude value in decimals. The table's origin is the north west corner."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"physical_latitude")," (double): longitude of the physical location where the table is situated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"physical_longitude")," (double): latitude of the physical location where the table is situated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rotation")," (double): the clockwise rotation of table in ",Object(r.b)("strong",{parentName:"li"},"degrees"),". It is x axis relative to the ",Object(r.b)("inlineCode",{parentName:"li"},"latitude")," and ",Object(r.b)("inlineCode",{parentName:"li"},"longitude"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cellSize")," (float): the physical size in ",Object(r.b)("strong",{parentName:"li"},"meters")," of one cell's edge.")),Object(r.b)("h4",{id:"owner-array-new"},Object(r.b)("inlineCode",{parentName:"h4"},"owner*")," (array) ",Object(r.b)("em",{parentName:"h4"},"new")),Object(r.b)("p",null,'field indicating the owner of the table. An object that has, "name, title, institution" (all strings).'),Object(r.b)("h4",{id:"block-array"},Object(r.b)("inlineCode",{parentName:"h4"},"block")," (array)"),Object(r.b)("p",null,"An array of strings to indicate the representation of elements in ",Object(r.b)("inlineCode",{parentName:"p"},"grid"),". Note it is an array, which is takes account on the order of the information. A Typical ",Object(r.b)("inlineCode",{parentName:"p"},"block")," element will start with ",Object(r.b)("inlineCode",{parentName:"p"},'"type", "height", "rotation"'),", but may different across tables."),Object(r.b)("h4",{id:"mapping-dictionary"},Object(r.b)("inlineCode",{parentName:"h4"},"mapping*")," (dictionary)"),Object(r.b)("p",null,'A breakdown containing the necessary mapping of data inside each block. This can be taken as the enumerator field, that you can have a verbose explanation of data types. Often, the "type" field has a mapping of what each block indicates.\nNote that you can have multiple mappings, for things like ',Object(r.b)("inlineCode",{parentName:"p"},"mask"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'"type": {"0": "RL", "1": "RM", "2": "RS"}\n')),Object(r.b)("h3",{id:"meta-auto-generated-by-server"},Object(r.b)("inlineCode",{parentName:"h3"},"meta [auto-generated by server]")),Object(r.b)("h4",{id:"users-should-avoid-sending-this"},"users should avoid sending this"),Object(r.b)("p",null,"meta data reserved for the backend. The server will insert these values."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," (GUID): hash(sha256, overkill) of the grid_data"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"timestamp")," (int): UNIX epoch timestamp indicating when the table was received in the server. Milliseconds."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apiv")," (string): api's version (which is 2)")),Object(r.b)("h3",{id:"gridarray-or-arrays"},Object(r.b)("inlineCode",{parentName:"h3"},"grid"),"(Array or arrays)"),Object(r.b)("p",null,"The meat part of the data. A grid field could be:\n",Object(r.b)("inlineCode",{parentName:"p"},'"grid":[[1,0,0],[0,7,3]]')," where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"i","[0][0]"," is the type of the gridcell"),Object(r.b)("li",{parentName:"ul"},"i","[0][1]"," is the height of the gridcell"),Object(r.b)("li",{parentName:"ul"},"i","[0][2]"," is the rotation of the gridcell")),Object(r.b)("p",null,"Note: the specifics of each ",Object(r.b)("inlineCode",{parentName:"p"},"grid")," object are specified in the ",Object(r.b)("inlineCode",{parentName:"p"},"block")," field"),Object(r.b)("p",null,"The direction of the data is illustrated below. The order of each single block is defined according to the ",Object(r.b)("inlineCode",{parentName:"p"},"header/block")," section."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"|  0 |  1 |  2 |  3 |\n|  4 |  5 |  6 |  7 |\n|  8 |  9 | 10 | 11 |\n| 12 | 13 | 14 | 15 |\n")),Object(r.b)("h3",{id:"objects"},Object(r.b)("inlineCode",{parentName:"h3"},"objects")),Object(r.b)("p",null,"Flexible area that you can put whatever field you want. This is a place you want for global variables could potentially change."),Object(r.b)("hr",null),Object(r.b)("h1",{id:"previous-api-version-should-not-be-used"},"Previous API version ","[should not be used]"),Object(r.b)("h3",{id:"version-10"},"version 1.0"),Object(r.b)("p",null,"This is the 1.0 format the cityIO table (only used in CityScope Volpe for now)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "grid": [{ "type": -2, "x": 13, "y": 0, "rot": 180 }],\n    "objects": {\n        "toggle4": 0,\n        "density": [1, 1, 12, 19, 19, 3],\n        "IDMax": 15,\n        "pop_young": 0,\n        "dockID": -1,\n        "slider1": 0.95,\n        "dockRotation": 0,\n        "pop_old": 0,\n        "pop_mid": 0,\n        "toggle1": 5,\n        "toggle2": 0,\n        "toggle3": 0\n    },\n    "id": "-Kj4L11NdrdbhHCcGGPo",\n    "timestamp": 1493664538794\n}\n')),Object(r.b)("hr",null),Object(r.b)("p",null,"The following is an ",Object(r.b)("strong",{parentName:"p"},"example")," of the mapping of ids and block representations."),Object(r.b)("p",null,"starting from ","[API v2.0]","(Data Format) ",Object(r.b)("strong",{parentName:"p"},"different tables may have different mappings"),"."),Object(r.b)("p",null,"Data typeId is a signed int."),Object(r.b)("p",null,"the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cityio.media.mit.edu/api/table/citymatrix_volpe"}),"mapping is also provided as a JSON format")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Id"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MASK_TABLE_BOUNDS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MASK_INTERACTIVE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RM")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OM")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ROAD")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AMENITIES")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PARK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PARKING")))),Object(r.b)("h3",{id:"enum-for-types"},"Enum for types"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MASK_TABLE_BOUNDS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MASK_INTERACTIVE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Residence Large")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Residence Medium")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Residence Small")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Office Large")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Office Medium")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Office Small")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ROAD"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AMENITIES"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PARK"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PARKING"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"density-number"},"Density Number"),Object(r.b)("p",null,"Right now we are using this value for the Volpe Project (it might change according to the city studied)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"density"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"89 sqm/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"55 sqm/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 sqm/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 sqm/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18 sqm/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5 sqm/ppl")))),Object(r.b)("p",null,"Originally taken from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ChangingPlaces/Andorra/tree/master/Grasshopper"}),"ChangingPlaces/Andorra/Grasshopper Repo")),Object(r.b)("h3",{id:"energy-consumption-buildings"},"Energy Consumption (Buildings)"),Object(r.b)("p",null,"Right now we are using this value for the Volpe Project (it might change according to the city studied)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Energy"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5930.34 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2617.20 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2141.59 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10542.83 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4652.80 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3807.27 kWh/ppl")))),Object(r.b)("h3",{id:"co2-production-buildings"},"CO2 Production (Buildings)"),Object(r.b)("p",null,"Right now we are using this value for the Volpe Project (it might change according to the city studied)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CO2"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2283.18 CO2/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1007.26 CO2/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"824.30 CO2/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4058.99 CO2/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1791.33 CO2/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1465.79 CO2/ppl")))),Object(r.b)("h3",{id:"energy-consumption-mobility"},"Energy Consumption (Mobility)"),Object(r.b)("p",null,"Right now we are using this value for the Volpe Project (it might change according to the city studied)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Energy"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Car"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"25437.50 kWh/ppl")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PEV"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4500.00 kWh/ppl")))),Object(r.b)("h3",{id:"co2-production-mobility"},"CO2 Production (Mobility)"),Object(r.b)("p",null,"Right now we are using this value for the Volpe Project (it might change according to the city studied)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CO2"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Car"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6684.97 CO2/vehicle")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PEV"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1732.50 CO2/vehicle")))))}d.isMDXComponent=!0},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,m=p["".concat(l,".").concat(j)]||p[j]||O[j]||r;return a?b.a.createElement(m,i(i({ref:t},o),{},{components:a})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);