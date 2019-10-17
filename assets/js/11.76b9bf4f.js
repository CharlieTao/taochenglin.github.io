(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(s,t,e){"use strict";e.r(t);var a=e(0),i=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[s._v("#")]),s._v(" git")]),s._v(" "),e("p",[e("strong",[s._v("合并两个tfs仓库到一个git仓库")])]),s._v(" "),e("p",[s._v("1)新建git，创建一个空文件，提交一次，设定HEAD")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('git init\necho "" > foo\ngit add foo\ngit commit -m "dummy commit to get a HEAD on master"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("2)tfs")]),s._v(" "),e("p",[s._v("tfs的仓库转换为分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git tfs list-remote-branches http://keysmile.xicp.net:7080/tfs/化学发光免疫分析仪\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3)添加subtree")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git tfs subtree add --prefix=Smart80Detect http://keysmile.xicp.net:7080/tfs/化学发光免疫分析仪 $/后台管理平台/DetectTest\ngit tfs subtree add --prefix=SMART http://keysmile.xicp.net:7080/tfs/化学发光免疫分析仪 $/仪器操纵/合并版\ngit tfs subtree add --prefix=DLL http://keysmile.xicp.net:7080/tfs/化学发光免疫分析仪 $/SMART3000全自动化学发光测定仪系统软件/InstrumentManipulation-控制-2010\ngit subtree add --prefix=MicroFluidics https://git.dev.tencent.com/TaoChenglin/MicroFluidics.git master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("4）subtree失败System.AccessViolationException")]),s._v(" "),e("p",[s._v("切回上一次更改重新执行")]),s._v(" "),e("p",[e("strong",[s._v("切换到之前的版本后HEAD游离")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git checkout 05664c5df178c2e6eaa0590ffea073736da2d1ec\ngit branch -v\ngit branch temp\ngit checkout temp\ngit checkout master\ngit merge temp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("首次提交，添加远程库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote add origin git@www.key-smile.cn:software/smart-3000.git\ngit push --set-upstream origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("pull时之前已经有文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git pull origin master --allow-unrelated-histories\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("pull和fetch")])]),s._v(" "),e("p",[s._v("git pull = git fetch + git merge")]),s._v(" "),e("p",[e("strong",[s._v("submodule和subtree")])]),s._v(" "),e("p",[s._v("submodule 链接   subtree拷贝")]),s._v(" "),e("p",[e("strong",[s._v("暂存")])]),s._v(" "),e("p",[s._v("git stash")]),s._v(" "),e("p",[s._v("保存当前工作进度，会把暂存区和工作区的改动保存起来。执行完这个命令后，在运行"),e("code",[s._v("git status")]),s._v("命令，就会发现当前是一个干净的工作区，没有任何改动。使用"),e("code",[s._v("git stash save 'message...'")]),s._v("可以添加一些注释")]),s._v(" "),e("p",[s._v("git stash list")]),s._v(" "),e("p",[s._v("显示保存进度的列表。也就意味着，"),e("code",[s._v("git stash")]),s._v("命令可以多次执行。")]),s._v(" "),e("p",[s._v("git stash pop [–index] [stash_id]")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("git stash pop")]),s._v(" 恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区。")]),s._v(" "),e("li",[e("code",[s._v("git stash pop --index")]),s._v(" 恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）")]),s._v(" "),e("li",[e("code",[s._v("git stash pop stash@{1}")]),s._v("恢复指定的进度到工作区。stash_id是通过"),e("code",[s._v("git stash list")]),s._v("命令得到的\n通过"),e("code",[s._v("git stash pop")]),s._v("命令恢复进度后，会删除当前进度。")])]),s._v(" "),e("p",[s._v("git stash apply [–index] [stash_id]")]),s._v(" "),e("p",[s._v("除了不删除恢复的进度之外，其余和"),e("code",[s._v("git stash pop")]),s._v(" 命令一样。")]),s._v(" "),e("p",[s._v("git stash drop [stash_id]")]),s._v(" "),e("p",[s._v("删除一个存储的进度。如果不指定stash_id，则默认删除最新的存储进度。")]),s._v(" "),e("p",[s._v("git stash clear")]),s._v(" "),e("p",[s._v("删除所有存储的进度。")]),s._v(" "),e("p",[e("strong",[s._v("变基")])]),s._v(" "),e("p",[s._v("在 Git 中整合来自不同分支的修改主要有两种方法："),e("code",[s._v("merge")]),s._v(" 以及 "),e("code",[s._v("rebase")]),s._v("。")]),s._v(" "),e("p",[s._v("无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。")]),s._v(" "),e("p",[e("strong",[s._v("pull失败")])]),s._v(" "),e("p",[s._v("拉取develop分支失败，有冲突的分支。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote prune origin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("删除在本地有但远程已不存在的分支。")]),s._v(" "),e("p",[e("strong",[s._v("手动合并")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git fetch origin\ngit checkout -b master origin/master\ngit fetch origin\ngit checkout origin/smart23.1\ngit merge --no-ff master\ngit push origin smart23.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("往前滚动一次提交")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git reset --hard HEAD~1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("忽略部分文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("添加.gitignore文件，中文目录要用UTF-8无签名编码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("查看是否已合并过某分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git log 分支\ngit log master | grep commitid\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("操作远程分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("remotes/origin/feature/....\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("合并")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("取消合并：git merge --abort\n有冲突时使用我们的:git merge ... -X ours\n有冲突时使用他人的:git merge ... -X theirs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("丢弃当前更改")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("已暂存：git reset --hard\n未暂存：git clean -df\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);