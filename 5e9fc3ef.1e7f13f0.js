(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{116:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/cs_an-98816fb9a24173dcb29a59aa1ef5bdf3.jpg"},117:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/Github_CS_Organization_diagram-70db1a5f41cb44cdb42ecd86aba9d951.png"},67:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return b}));var a=i(2),n=i(6),r=(i(0),i(77)),o={id:"Introduction",slug:"/"},c={unversionedId:"general/Introduction",id:"general/Introduction",isDocsHomePage:!1,title:"Introduction",description:"MIT CityScope",source:"@site/docs/general/intro.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/CityScope/cityscope.github.io/docs/general/intro.md",version:"current",sidebar:"someSidebar",next:{title:"Docs Development",permalink:"/docs/general/Docs Development"}},l=[{value:"MIT CityScope",id:"mit-cityscope",children:[{value:"What is CityScope?",id:"what-is-cityscope",children:[]},{value:"CityScope GitHub Organization Structure",id:"cityscope-github-organization-structure",children:[]}]},{value:"1. Familiar yourself with Git and GitHub",id:"1-familiar-yourself-with-git-and-github",children:[]},{value:"2. Account Access Rights",id:"2-account-access-rights",children:[]},{value:"3. Binary data and Large Files",id:"3-binary-data-and-large-files",children:[]},{value:"4. External Libraries",id:"4-external-libraries",children:[]},{value:"5. Branching",id:"5-branching",children:[]},{value:"6. Other Tricks",id:"6-other-tricks",children:[]}],s={rightToc:l};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"mit-cityscope"},"MIT CityScope"),Object(r.b)("p",null,Object(r.b)("img",{alt:"CityScope in Andorra. Photo: Ariel Noyman",src:i(116).default})),Object(r.b)("h3",{id:"what-is-cityscope"},"What is CityScope?"),Object(r.b)("p",null,"CityScope is a project conducted at the MIT Media Lab City Science group. It includes a slew of tangible and digital platforms dedicated to solving spatial design and urban planning challenges. The tools range from simulations that quantify the impact of disruptive interventions in cities to community engagement systems. We develop and deploy these tools around the world and maintain free and open-source community for the majority of our work."),Object(r.b)("p",null,"This ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cityscope.github.io"}),"website")," serves documentation for the CityScope project."),Object(r.b)("h3",{id:"cityscope-github-organization-structure"},"CityScope GitHub Organization Structure"),Object(r.b)("p",null,"This organization consists two types of repositories."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Tools"),Object(r.b)("p",{parentName:"li"},"Repositories having the prefix of ",Object(r.b)("inlineCode",{parentName:"p"},"CS_")," are the bare tools that commonly used across city projects.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Cities"),Object(r.b)("p",{parentName:"li"},"Cities have their own repositories that includes links (more exactly submodules) of the above tools and other things. These repos start with ",Object(r.b)("inlineCode",{parentName:"p"},"CSL_"),"."))),Object(r.b)("p",null,Object(r.b)("img",{alt:"CityScope in Andorra. Photo: Ariel Noyman",src:i(117).default})),Object(r.b)("h1",{id:"repository-guideline"},"Repository Guideline"),Object(r.b)("p",null,"The intention of this guideline is to make a minimal convention for handling git repositories for this city scope organization. Historically, the group's majority of the people have an architecture background which are self taught 'rogue' programmers. Version control has not been our tradition."),Object(r.b)("h2",{id:"1-familiar-yourself-with-git-and-github"},"1. Familiar yourself with Git and GitHub"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://guides.github.com/"}),"GitHub Guides")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://rogerdudler.github.io/git-guide/"}),"git - the simple guide")," as well as the handy ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf"}),"cheat sheet")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.git-tower.com/learn/git/ebook"}),"Learn Version Control with Git\n")),Object(r.b)("li",{parentName:"ul"},"If you are new to git, commit and push as much as possible.")),Object(r.b)("h2",{id:"2-account-access-rights"},"2. Account Access Rights"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Every current postdoctoral associate, student (master and phd), and research scientists (specialists) should have rights to create and contribute to any repository upon their request."),Object(r.b)("li",{parentName:"ul"},"Researchers will have the right to delete repositories"),Object(r.b)("li",{parentName:"ul"},"When leaving the City Science research group, one should explicitly consult with at least one researcher if he/she wants to maintain the rights, in that case be sure to clarify the expiry date."),Object(r.b)("li",{parentName:"ul"},"Abuse of this github organization or repositories will potentially loose rights")),Object(r.b)("h2",{id:"3-binary-data-and-large-files"},"3. Binary data and Large Files"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There is little chance that you want to version control binary data, these include compiled code, images, audio and video. Think twice whether you really need to add it, that file will be eternally (unless you delete the repository, or capable of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History"}),"rewriting history"),") saved to the history. You might consider putting them to other cloud data storage services like Dropbox."),Object(r.b)("li",{parentName:"ul"},"The same applies to Large data files like database dumps and log files."),Object(r.b)("li",{parentName:"ul"},"If you have compiled code, you should ",Object(r.b)("inlineCode",{parentName:"li"},"git tag")," and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.github.com/articles/creating-releases/"}),"mark it as a release"),". By this you will be able to upload and attach that executable as an archive. Attach other binary data to the release. This is a good way to crystalise the project."),Object(r.b)("li",{parentName:"ul"},"One exception may be Grasshopper gh definition files, but again be considerate and make it light as possible."),Object(r.b)("li",{parentName:"ul"},"The above points should stop you from adding most binary data, but if still need to add for some reason, ensure that its compressed to a moderate size. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.r-bloggers.com/data-on-github-the-easy-way-to-make-your-data-available/"}),"here")," for more details about storing data on gitub")),Object(r.b)("h2",{id:"4-external-libraries"},"4. External Libraries"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Avoid putting External Libraries into the repository"),", no need to version control. It might be seen as stealing code, and/or may be considered as an act of obscuring the amount of contribution.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Confirm that the code is okay to disclose if you plan to go open source."),Object(r.b)("li",{parentName:"ul"},"See if there is a dependency management / packaging system. Thats way easier to maintain."),Object(r.b)("li",{parentName:"ul"},"If the library has its own repository, you can use ",Object(r.b)("inlineCode",{parentName:"li"},"submodules")," to point to that. You will want to explicitly say to your cloners you need to ",Object(r.b)("inlineCode",{parentName:"li"},"git clone --recursive")," to get it working out of the box. This is good because if you want to modify that library, you can fork and still register it as a sub-module."),Object(r.b)("li",{parentName:"ul"},"If it doesn't have its own repo, point to an URL or an archive file using the Guideline 2-3 technique. Be careful for licenses.")))),Object(r.b)("h2",{id:"5-branching"},"5. Branching"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is likely that one program or script will be modified to fit to different projects / situations. Effectively use ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://en.wikipedia.org/wiki/Branching_%28version_control%29"}),"branching")),". Leave the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch as generic as possible, and let the branch develop project specific modifications. If there is a feature to update the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch, its time to have a meeting with the team."),Object(r.b)("li",{parentName:"ul"},"If you want to experiment and other people is working on the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch, create your own development branch and use it as a sandbox.")),Object(r.b)("h2",{id:"6-other-tricks"},"6. Other Tricks"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"git clone --recursive git@github.com:ChangingPlaces/repository_name")," will clone the repository and any related sub module.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"git clone --depth=1 git@github.com:ChangingPlaces/repository_name")," will take only the latest history of the repository. Maybe better when cloning to a demo table."),Object(r.b)("li",{parentName:"ul"},"Consider using ",Object(r.b)("inlineCode",{parentName:"li"},"git rebase")," if you just want to overwrite the repository, it will leave a cleaner history. +It's often better when your the only one coding. but ",Object(r.b)("strong",{parentName:"li"},'"do not rebase commits that exist outside your repository."')),Object(r.b)("li",{parentName:"ul"},"For GitHub beginners, it might be helpful to use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://desktop.github.com/"}),"GitHub Desktop")," -- the GUI of GitHub -- which provide you the basic functionalities of GitHub, including clone, create branches, commit changes, etc. But to a certain point, you will want to use ",Object(r.b)("strong",{parentName:"li"},"Git Shell"),", which provide you full, more advanced functions."),Object(r.b)("li",{parentName:"ul"},"It's good practice to add a predefined ",Object(r.b)("inlineCode",{parentName:"li"},".gitignore")," file before your fist commit to maintain the repo clean and tidy. There is a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/github/gitignore"}),"long list")," which you can choose, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/github/gitignore/blob/master/Processing.gitignore"}),"even for Processing"),"."),Object(r.b)("li",{parentName:"ul"},"Revert a commit ",Object(r.b)("inlineCode",{parentName:"li"},"git push -f origin HEAD^:master"))))}b.isMDXComponent=!0},77:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(i),h=a,d=u["".concat(o,".").concat(h)]||u[h]||p[h]||r;return i?n.a.createElement(d,c(c({ref:t},s),{},{components:i})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=i[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);