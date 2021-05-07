(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(86)),o={id:"Tutorial"},d={unversionedId:"modules/Brix/Tutorial/Tutorial",id:"modules/Brix/Tutorial/Tutorial",isDocsHomePage:!1,title:"Tutorial",description:"Tutorial",source:"@site/docs/modules/Brix/Tutorial/Tutorial.md",slug:"/modules/Brix/Tutorial/Tutorial",permalink:"/modules/Brix/Tutorial/Tutorial",editUrl:"https://github.com/CityScope/cityscope.github.io/blob/new_docsite/docsite/docs/modules/Brix/Tutorial/Tutorial.md",version:"current"},l=[{value:"Basics of building a CityScope indicator",id:"basics-of-building-a-cityscope-indicator",children:[]},{value:"Let\u2019s talk data (input)",id:"lets-talk-data-input",children:[]},{value:"Build and test your indicator (output)",id:"build-and-test-your-indicator-output",children:[]},{value:"Deploy your indicator",id:"deploy-your-indicator",children:[]},{value:"Additional tools",id:"additional-tools",children:[{value:"Auto-updates of GEOGRIDDATA",id:"auto-updates-of-geogriddata",children:[]},{value:"Testing your module",id:"testing-your-module",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tutorial"},"Tutorial"),Object(r.b)("h2",{id:"basics-of-building-a-cityscope-indicator"},"Basics of building a CityScope indicator"),Object(r.b)("p",null,"Let\u2019s get to it. First, what table are you building for? If you don\u2019t have a specific table, that is totally okay and you can create one ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cityscope.media.mit.edu/CS_cityscopeJS/#/editor"}),"here"),". Note: by the time you read this, CityScope might pose some limitations on new projects (",Object(r.b)("inlineCode",{parentName:"p"},"tables"),"). Please follow instructions in the link above.\nFor this tutorial, we crated one called ",Object(r.b)("inlineCode",{parentName:"p"},"dungeonmaster"),"."),Object(r.b)("p",null,"After creating a table, open the frond end given by the tool and edit the table at least once. Change some blocks, and push those changes to CityIO."),Object(r.b)("p",null,"An indicator will take in data and produce a result. Depending on the type of indicator you are building, the result can be a number, a heatmap, an annotation, or a complex simulation of agents moving around the screen. If you are building a very complex module, your indicator might return all of the above. Each new indicator is built as an subclass of the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator")," class provided in this library. Make sure you define three functions: ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.load_module()"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()"),". Here\u2019s a barebones example of an indicator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"from brix import Indicator\nclass MyIndicator(Indicator):\n        '''\n        Write a description for your indicator here.\n        '''\n        def setup(self):\n                '''\n                Think of this as your __init__.\n                Here you will define the properties of your indicator.\n                Although there are no required properties, be nice and give your indicator a name.\n                '''\n                self.name = 'My numeric indicator'\n        self.indicator_type = 'numeric'\n        self.viz_type = 'radar'\n\n        def load_module(self):\n                '''\n                This function is not strictly necessary, but we recommend that you define it if you want to load something from memory. It will make your code more readable.\n                All data loading actions should go here.\n                '''\n                pass\n\n        def return_indicator(self, geogrid_data):\n                '''\n                This is the main course of your indicator.\n                This function takes in `geogrid_data` and returns the value of your indicator.\n                The library is flexible enough to handle indicators that return a number or a dictionary.\n                '''\n                return 1\n")),Object(r.b)("h2",{id:"lets-talk-data-input"},"Let\u2019s talk data (input)"),Object(r.b)("p",null,"What is ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data"),"?\nEvery time we create a CityScope table, we define a regularly spaced grid which is overlaid on the city district we\u2019re modelling. These grid cells are the basic unit of analysis for the CityScope modules. Every grid cell has properties such as the ",Object(r.b)("inlineCode",{parentName:"p"},"Type")," which represents the land use and ",Object(r.b)("inlineCode",{parentName:"p"},"Height")," which represents the number of floors. These data are dynamic and are updated each time a user interacts with the CityScope table, experimenting with the spatial organisation of land uses and infrastructure. These dynamic data are stored the variable geogrid_data. This is a list of ojects: one for each grid cell in the CityScope table. The contents of each object really depends on the specific table you are building for and on the properties assigned to your indicator. There are two options that will control what geogrid_data contains which are: ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.requires_geometry")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.requires_geogrid_props"),". These two properties are set to ",Object(r.b)("inlineCode",{parentName:"p"},"False")," by default, but you can change them inside the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()")," function depending on the needs of your indicator."),Object(r.b)("p",null,"To access ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," you will need to instantiate a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," object that will handle all communication with the table. Go ahead, take a look at how this object looks like by creating a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," and linking it to a table:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"from brix import Handler\nH = Handler('dungeonmaster',quietly=False)\nH.get_geogrid_data()\n")),Object(r.b)("p",null,"By default, each ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," is set to work quietly in the background. If you wish to get feedback on what your Handler is doing, you can set ",Object(r.b)("inlineCode",{parentName:"p"},"quietly=False")," when you create your Handler. This is useful for debugging."),Object(r.b)("p",null,"Bear in mind that the endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"GEOGRIDDATA")," is created only after your first edit to the table. If you just created your table, you need to go to the front end and edit the table at least once for ",Object(r.b)("inlineCode",{parentName:"p"},"GEOGRIDDATA")," to show up."),Object(r.b)("p",null,"The function ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.get_geogrid_data()")," accepts to optional keyword arguments ",Object(r.b)("inlineCode",{parentName:"p"},"include_geometries")," and ",Object(r.b)("inlineCode",{parentName:"p"},"with_properties"),". These arguments correspond to ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.requires_geometry")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.requires_geogrid_props")," parameters defined in the Indicator ",Object(r.b)("inlineCode",{parentName:"p"},"setup")," function. For example, if ",Object(r.b)("inlineCode",{parentName:"p"},"requires_geogrid_props=True")," in the setup, and the Indicator is linked to the table, the Handler will know to return ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," with ",Object(r.b)("inlineCode",{parentName:"p"},"with_properties=True"),"."),Object(r.b)("p",null,"Go ahead and see how ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," would look like if you set ",Object(r.b)("inlineCode",{parentName:"p"},"requires_geometry=True"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"H.get_geogrid_data(include_geometries=True)\n")),Object(r.b)("p",null,"Please note that ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," behaves very much like a list of dictionaries, but it is not a list. It belongs to the class ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA"),", which is an extension of a list to include additional functions and properties related to the table. For example, you can get the meta-properties of the table (such as type definitions, location, etc.) by using ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA.get_geogrid_props()"),". This is useful if, for example, you are interested in counting the total number of block types, including those that are not currently on the table. Run the following example to see how geogrid_props looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"geogrid_data = H.get_geogrid_data()\ngeogrid_data.get_geogrid_props()\n")),Object(r.b)("p",null,"Depending on the needs of your indicator, you can generate different views of this object. For example, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA.as_df()")," to return the pandas.DataFrame version of your object. Similarly, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA.as_graph()")," to return the networkx.Graph representation of GEOGRIDDATA. The graph representation is the network connecting every cell to its 4 closest neighbors."),Object(r.b)("p",null,"Try seeing your ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," as a pandas.DataFrame:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"geogrid_data = H.get_geogrid_data()\ngeogrid_data.as_df()\n")),Object(r.b)("p",null,"Additionally, you can remove non-interactive cells from ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data")," by using ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA.remove_noninteractive()")," and get the table bounds by using ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA.bounds()"),"."),Object(r.b)("p",null,"The following example gets a grid, remove all non interactive cells and transforms it to a dataframe:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"from brix import Handler\nH = Handler('dungeonmaster')\ngeogrid_data = H.get_geogrid_data()\ngeogrid_data = geogrid_data.remove_noninteractive()\ngeogrid_data.as_df()\n")),Object(r.b)("h2",{id:"build-and-test-your-indicator-output"},"Build and test your indicator (output)"),Object(r.b)("p",null,"This library ensures that you can focus on what you do best: writing a kick ass ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function that will make everyone\u2019s urban planning life better."),Object(r.b)("p",null,"To recap, an indicator is build by defining at least a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()")," function that takes care of configuring the indicator and a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," that will calculate the value of the indicator for a given ",Object(r.b)("inlineCode",{parentName:"p"},"geogrid_data"),"."),Object(r.b)("p",null,"Here\u2019s an example of simple ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," functions for a numeric indicator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"def setup(self):\n        self.name = 'My numeric indicator'\n        self.indicator_type = 'numeric'\n        self.viz_type = 'radar'\n\ndef return_indicator(self,geogrid_data):\n        return 1\n")),Object(r.b)("p",null,"To test your ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function while debugging it, you can use the object returned by ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.get_geogrid_data()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"H = Handler('dungeonmaster')\ngeogrid_data = H.get_geogrid_data()\nI.return_indicator(geogrid_data)\n")),Object(r.b)("p",null,"Brix distinguish between four different types of indicators defined using the attribute ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.indicator_type")," defined in ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()"),": ",Object(r.b)("inlineCode",{parentName:"p"},"numeric"),", ",Object(r.b)("inlineCode",{parentName:"p"},"heatmap"),", ",Object(r.b)("inlineCode",{parentName:"p"},"textual"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"hybrid"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"indicator_type='numeric'")," is the default and refers to a simple numeric indicator (e.g. average, density, diversity, etc.). When defining a numeric indicator, there are multiple ways in which the front end can display them (e.g. bar chart, radar plot, etc.). This is controlled by the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.viz_type")," attribute, also defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()"),". The default value is set to ",Object(r.b)("inlineCode",{parentName:"p"},"self.viz_type=radar")," which means that unless it is specified otherwise, all numeric indicators will be added to the radar plot. For a ",Object(r.b)("inlineCode",{parentName:"p"},"numeric")," indicator, the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function can simply return a number or a list of numbers, all of which will be added to the same front end visualization (e.g. all bar charts, all radar numbers). If you want to have more fine control of where each indicator is displayed, we recommend building your ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function such that it returns a dictionary with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[\n        {'name': 'Social Wellbeing', 'value': 0.3, 'viz_type': 'radar'},\n        {'name': 'Environmental Impact', 'value': 0.1, 'viz_type': 'radar'},\n        {'name': 'Mobility Impact', 'value': 0.5, 'viz_type': 'bar'}\n]\n")),Object(r.b)("p",null,"Note that if you define ",Object(r.b)("inlineCode",{parentName:"p"},"viz_type")," in the return dictionary of ",Object(r.b)("inlineCode",{parentName:"p"},"return_indicator"),", it will overwrite any default property defined in ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.setup()"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"indicator_type='heatmap'")," refers to a heatmap indicator that will be displayed not in a chart but projected directly on the table (e.g. density, traffic congestion, etc.). For a ",Object(r.b)("inlineCode",{parentName:"p"},"heatmap")," indicator, the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function should return a geojson of points with attributes, or a geopandas.GeoDataFrame also with points and attributes. This type of indicator is a bit more complicated to build and will often require knowledge of spatial analytics. See the examples if you are interested."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"indicator_type='textual'")," refers to an indicator that is displayed as a text annotation in one of the cells. This can be used to highlight something important about that cell to the front end user. For a ",Object(r.b)("inlineCode",{parentName:"p"},"textual")," indicator, the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function should return a list of dictionaries, each with two keys, ",Object(r.b)("inlineCode",{parentName:"p"},"id")," that identified the cell to annotate, and ",Object(r.b)("inlineCode",{parentName:"p"},"info")," with a string that will be projected over that cell in the front end. Here\u2019s an example of a list that annotated cell ",Object(r.b)("inlineCode",{parentName:"p"},"450")," with ",Object(r.b)("inlineCode",{parentName:"p"},"yes!")," and cell ",Object(r.b)("inlineCode",{parentName:"p"},"40")," with ",Object(r.b)("inlineCode",{parentName:"p"},"no!"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'[{\n        "id": 450,\n        "info": "yes!"\n},{\n        "id": 40,\n        "info": "no!"\n}]\n')),Object(r.b)("p",null,"Finally, ",Object(r.b)("inlineCode",{parentName:"p"},"indicator_type='hybrid'")," is used when building a very complex module that returns information to be displayed in multiple different formats. Think of a complex energy usage simulation that will display the total energy consumed as bar in the bar chart, that will show the energy used by each cell projected on the table as a heatmap, and that might annotate some cells when they do not have enough energy available to them. For a ",Object(r.b)("inlineCode",{parentName:"p"},"hybrid")," indicators, you have two ways of organization your code. You can define your own ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function, or you can define specific functions for each of the available types of indicators: ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator_numeric()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator_heatmap()"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator_textual()"),". If you do not define a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," function, brix will run first the heatmap, then the numeric indicator, and finally the textual indicator. If you chose to have tighter control of the order in which the simulation runs, you can also define your own ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator.return_indicator()")," by calling these three functions. This function should return a dictionary with three keys: ",Object(r.b)("inlineCode",{parentName:"p"},"heatmap"),", ",Object(r.b)("inlineCode",{parentName:"p"},"numeric"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"textual"),". Not all three keys have to be present. See the example below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"def return_indicator(self, geogrid_data):\nout = {}\nout['heatmap'] = self.return_indicator_heatmap(geogrid_data)\nout['numeric'] = self.return_indicator_numeric(geogrid_data)\nout['textual'] = self.return_indicator_textual(geogrid_data)\nreturn out\n")),Object(r.b)("h2",{id:"deploy-your-indicator"},"Deploy your indicator"),Object(r.b)("p",null,"Finally, once you have build a series of indicators, the right way to deploy them is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," class. A ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," object should be the go-to connection to the table and will handle all possible exceptions. The two most important methods are ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.add_indicators()")," which takes a list of ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator")," objects and connects them to the table, and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.listen()")," that is a method that runs continuously waiting for updates in the CityScope table. This method can also creates its own thread, to free up the main thread in case the user needs to connect to other tables (by setting ",Object(r.b)("inlineCode",{parentName:"p"},"new_thread=True"),"). The example below assumes you have already defined indicators named Density, Diversity and Proximity in a file named ",Object(r.b)("inlineCode",{parentName:"p"},"myindicators.py"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"from brix import Handler\nfrom myindicators import Density, Diversity, Proximity\n\ndens = Density()\ndivs = Diversity()\nprox = Proximity()\n\nH = Handler('dungeonmaster', quietly=False)\nH.add_indicators([\n        dens,\n        divs,\n        prox\n])\nH.listen()\n")),Object(r.b)("p",null,"To see the indicators in the handler you can use ",Object(r.b)("inlineCode",{parentName:"p"},"H.list_indicators()")," to list the indicator names, and use ",Object(r.b)("inlineCode",{parentName:"p"},"H.return_indicator(<indicator_name>)")," to see the value of the indicator. Finally, the function ",Object(r.b)("inlineCode",{parentName:"p"},"H.update_package()")," will return the data that will be posted on CityIO."),Object(r.b)("h2",{id:"additional-tools"},"Additional tools"),Object(r.b)("p",null,"This module also contains a set of other useful functions that integrate with ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator"),"."),Object(r.b)("p",null,"The functions ",Object(r.b)("inlineCode",{parentName:"p"},"brix.get_OSM_geometries()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"brix.get_OSM_nodes()")," help you get data from Open Street Maps for your table."),Object(r.b)("h3",{id:"auto-updates-of-geogriddata"},"Auto-updates of GEOGRIDDATA"),Object(r.b)("p",null,"Brix also has the capability of automatically updating GEOGRIDDATA. For simple one-time updates, follow the documentation of ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.update_geogrid_data()"),". To use this feeature, you first need to define a function that takes a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.GEOGRIDDATA")," as an input. When used with ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.update_geogrid_data()"),", this function can take any number of keyword arguments. The following example raises the height of all cells by 3 units:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"def add_height(geogrid_data, levels=1):\n        for cell in geogrid_data:\n                cell['height'] += levels\n        return geogrid_data\n\nH = Handler('dungeonmaster', quietly=False)\nH.update_geogrid_data(add_height,levels=3)\n")),Object(r.b)("p",null,"Brix also supports GEOGRIDDATA updates everytime there is a registered user interaction in the front end. To add a function to the update schedule, use ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.add_geogrid_data_update_function()"),". This has the limitation that your update funcion cannot take in any arguments other. If this limitation proves too restrictive, please submit an issue and we\u2019ll consider pushing an update."),Object(r.b)("p",null,"The following example updates the whole grid to Light Industrial use everytime there\u2019s a user interaction:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"def update_g(geogrid_data):\n        for cell in geogrid_data:\n                cell['name'] = 'Light Industrial'\n        return geogrid_data\n\nH = Handler(table_name,quietly=False)\nH.add_geogrid_data_update_function(update_g)\nH.listen()\n")),Object(r.b)("p",null,"The updates triggered by ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler.listen()")," follow the following order:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"get GEOGRIDDATA")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"run all GEOGRIDDATA updates using the result of 1 as input")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"get the new GEOGRIDDATA")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"update all indicators using the GEOGRIDDATA object resulting from 3")),Object(r.b)("h3",{id:"testing-your-module"},"Testing your module"),Object(r.b)("p",null,"To automatically test your module, this library provides the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.User")," class that simulates the behavior of a user interacting with your grid. This user runs in its own new thread to free up your main thread so that you can keep wokring on your indicator."),Object(r.b)("p",null,"The following example consists of a ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Handler")," that contains a diversity ",Object(r.b)("inlineCode",{parentName:"p"},"brix.Indicator")," that reponds to the updates of the ",Object(r.b)("inlineCode",{parentName:"p"},"brix.User"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"from brix import Handler\nfrom brix.examples import Diversity\nfrom brix.test_tools import User\ntable_name = 'dungeonmaster'\nU = User(table_name)\nH = Handler(table_name,quietly=False)\ndiv = Diversity()\nH.add_indicator(div)\nU.start_user()\nH.listen()\n")))}b.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,h=s["".concat(o,".").concat(u)]||s[u]||p[u]||r;return n?i.a.createElement(h,d(d({ref:t},c),{},{components:n})):i.a.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);