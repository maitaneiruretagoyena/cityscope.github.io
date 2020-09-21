(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var a=i(2),r=i(6),n=(i(0),i(82)),o={},l={unversionedId:"archive/guidelines_archive",id:"archive/guidelines_archive",isDocsHomePage:!1,title:"guidelines_archive",description:"CityScope Repository Guideline",source:"@site/docs/archive/guidelines_archive.md",slug:"/archive/guidelines_archive",permalink:"/docs/archive/guidelines_archive",editUrl:"https://github.com/CityScope/cityscope.github.io/blob/new_docsite/docsite/docs/archive/guidelines_archive.md",version:"current"},c=[{value:"1. Familiar yourself with Git and GitHub",id:"1-familiar-yourself-with-git-and-github",children:[]},{value:"2. Account Access Rights",id:"2-account-access-rights",children:[]},{value:"3. Binary data and Large Files",id:"3-binary-data-and-large-files",children:[]},{value:"4. External Libraries",id:"4-external-libraries",children:[]},{value:"5. Branching",id:"5-branching",children:[]},{value:"6. Other Tricks",id:"6-other-tricks",children:[]}],s={rightToc:c};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"cityscope-repository-guideline"},"CityScope Repository Guideline"),Object(n.b)("p",null,"The intention of this guideline is to make a minimal convention for handling git repositories for this city scope organization. Historically, the group's majority of the people have an architecture background which are self taught 'rogue' programmers. Version control has not been our tradition."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"1-familiar-yourself-with-git-and-github"},"1. Familiar yourself with Git and GitHub"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://guides.github.com/"}),"GitHub Guides")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://rogerdudler.github.io/git-guide/"}),"git - the simple guide")," as well as the handy ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf"}),"cheat sheet")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.git-tower.com/learn/git/ebook"}),"Learn Version Control with Git\n")),Object(n.b)("li",{parentName:"ul"},"If you are new to git, commit and push as much as possible.")),Object(n.b)("h2",{id:"2-account-access-rights"},"2. Account Access Rights"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Every current postdoctoral associate, student (master and phd), and research scientists (specialists) should have rights to create and contribute to any repository upon their request."),Object(n.b)("li",{parentName:"ul"},"Researchers will have the right to delete repositories"),Object(n.b)("li",{parentName:"ul"},"When leaving the City Science research group, one should explicitly consult with at least one researcher if he/she wants to maintain the rights, in that case be sure to clarify the expiry date."),Object(n.b)("li",{parentName:"ul"},"Abuse of this github organization or repositories will potentially loose rights")),Object(n.b)("h2",{id:"3-binary-data-and-large-files"},"3. Binary data and Large Files"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"There is little chance that you want to version control binary data, these include compiled code, images, audio and video. Think twice whether you really need to add it, that file will be eternally (unless you delete the repository, or capable of ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History"}),"rewriting history"),") saved to the history. You might consider putting them to other cloud data storage services like Dropbox."),Object(n.b)("li",{parentName:"ul"},"The same applies to Large data files like database dumps and log files."),Object(n.b)("li",{parentName:"ul"},"If you have compiled code, you should ",Object(n.b)("inlineCode",{parentName:"li"},"git tag")," and ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.github.com/articles/creating-releases/"}),"mark it as a release"),". By this you will be able to upload and attach that executable as an archive. Attach other binary data to the release. This is a good way to crystalise the project."),Object(n.b)("li",{parentName:"ul"},"One exception may be Grasshopper gh definition files, but again be considerate and make it light as possible."),Object(n.b)("li",{parentName:"ul"},"The above points should stop you from adding most binary data, but if still need to add for some reason, ensure that its compressed to a moderate size. See ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.r-bloggers.com/data-on-github-the-easy-way-to-make-your-data-available/"}),"here")," for more details about storing data on gitub")),Object(n.b)("h2",{id:"4-external-libraries"},"4. External Libraries"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Avoid putting External Libraries into the repository"),", no need to version control. It might be seen as stealing code, and/or may be considered as an act of obscuring the amount of contribution.   ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Confirm that the code is okay to disclose if you plan to go open source."),Object(n.b)("li",{parentName:"ul"},"See if there is a dependency management / packaging system. Thats way easier to maintain."),Object(n.b)("li",{parentName:"ul"},"If the library has its own repository, you can use ",Object(n.b)("inlineCode",{parentName:"li"},"submodules")," to point to that. You will want to explicitly say to your cloners you need to ",Object(n.b)("inlineCode",{parentName:"li"},"git clone --recursive")," to get it working out of the box. This is good because if you want to modify that library, you can fork and still register it as a sub-module."),Object(n.b)("li",{parentName:"ul"},"If it doesn't have its own repo, point to an URL or an archive file using the Guideline 2-3 technique. Be careful for licenses.")))),Object(n.b)("h2",{id:"5-branching"},"5. Branching"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"It is likely that one program or script will be modified to fit to different projects / situations. Effectively use ",Object(n.b)("strong",{parentName:"li"},Object(n.b)("a",Object(a.a)({parentName:"strong"},{href:"https://en.wikipedia.org/wiki/Branching_%28version_control%29"}),"branching")),". Leave the ",Object(n.b)("inlineCode",{parentName:"li"},"master")," branch as generic as possible, and let the branch develop project specific modifications. If there is a feature to update the ",Object(n.b)("inlineCode",{parentName:"li"},"master")," branch, its time to have a meeting with the team."),Object(n.b)("li",{parentName:"ul"},"If you want to experiment and other people is working on the ",Object(n.b)("inlineCode",{parentName:"li"},"master")," branch, create your own development branch and use it as a sandbox.")),Object(n.b)("h2",{id:"6-other-tricks"},"6. Other Tricks"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"git clone --recursive git@github.com:ChangingPlaces/repository_name")," will clone the repository and any related sub module.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git clone --depth=1 git@github.com:ChangingPlaces/repository_name")," will take only the latest history of the repository. Maybe better when cloning to a demo table."),Object(n.b)("li",{parentName:"ul"},"Consider using ",Object(n.b)("inlineCode",{parentName:"li"},"git rebase")," if you just want to overwrite the repository, it will leave a cleaner history. +It's often better when your the only one coding. but ",Object(n.b)("strong",{parentName:"li"},'"do not rebase commits that exist outside your repository."')),Object(n.b)("li",{parentName:"ul"},"For GitHub beginners, it might be helpful to use ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://desktop.github.com/"}),"GitHub Desktop")," -- the GUI of GitHub -- which provide you the basic functionalities of GitHub, including clone, create branches, commit changes, etc. But to a certain point, you will want to use ",Object(n.b)("strong",{parentName:"li"},"Git Shell"),", which provide you full, more advanced functions."),Object(n.b)("li",{parentName:"ul"},"It's good practice to add a predefined ",Object(n.b)("inlineCode",{parentName:"li"},".gitignore")," file before your fist commit to maintain the repo clean and tidy. There is a ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/github/gitignore"}),"long list")," which you can choose, ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/github/gitignore/blob/master/Processing.gitignore"}),"even for Processing"),"."),Object(n.b)("li",{parentName:"ul"},"Revert a commit ",Object(n.b)("inlineCode",{parentName:"li"},"git push -f origin HEAD^:master"))))}b.isMDXComponent=!0},82:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(i),p=a,d=u["".concat(o,".").concat(p)]||u[p]||h[p]||n;return i?r.a.createElement(d,l(l({ref:t},s),{},{components:i})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);