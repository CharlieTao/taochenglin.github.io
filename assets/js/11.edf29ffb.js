(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{276:function(t,e,r){"use strict";r.r(e);var n=r(13),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bt"}},[t._v("#")]),t._v(" BT")]),t._v(" "),e("p",[e("strong",[t._v("magnet")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("magnet:?xt=urn:btih:4D9FA761D69964B00DF0B3B0C9C1F968EA6C47D0&xt=urn:ed2k:7655dbacff9395e579c4c9cb49cbec0e&dn=bbb_sunflower_2160p_30fps_stereo_abl.mp4&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&ws=http%3a%2f%2fdistribution.bbb3d.renderfarming.net%2fvideo%2fmp4%2fbbb_sunflower_2160p_30fps_stereo_abl.mp4\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("magnet：协议名，和HTTP，FTP一样，BT下载中的一种协议。\nxt ：exact topic的缩写，包含文件哈希值的统一资源名称。\nbtih：BitTorrent Info Hash的缩写，表示哈希方法名，这里还可以使用ED2K，\nAICH，SHA1和MD5等。这个值是文件的标识符，是不可缺少的。\ndn ：display name的缩写，表示向用户显示的文件名。这一项是选填的，由此可知，上面磁力链接的文件名是bbb_sunflower_2160p_30fps_stereo_abl.mp4\ntr ：tracker的缩写，表示tracker服务器的地址。这一项也是选填的，即torrent文件中的torrent服务器。\nws : webseed的缩写，表示网络种子。\nurn:(Uniform Resource Name, URN 表示资源名\nbtih：BitTorrent info hash，种子散列函数")]),t._v(" "),e("p",[t._v("P2P客户端使用磁力链接，下载资源的种子文件，然后根据种子文件下载资源。")]),t._v(" "),e("p",[e("strong",[t._v("torrent，种子文件")])]),t._v(" "),e("p",[t._v("torrent包含两部分内容，一是内容，即这个种子文件中包含什么内容，二是这个内容位置在哪，这个位置在哪并不是真实的内容位置，而是torrent服务器的地址，客户端软件（迅雷）连接上服务器地址后，服务器地址告诉迅雷，真正目标文件的IP，然后迅雷再去连接内容提供者的IP。\n从这个过程中可以看到，torrent只是一个文件集合，它并不会告诉你你要真实下载的内容在哪里，需要torrent客户端再去服务器搜索一遍（虽然这个过程对普通使用者是透明的），如果不借助torrent客户端，你根本不知道.torrent文件里是啥。")]),t._v(" "),e("p",[e("strong",[t._v("DHT")])]),t._v(" "),e("p",[t._v("DHT（Distributed Hash Table，分布式哈希表），DHT由节点组成，它存储peer的位置，是一种分布式存储方法。在不需要服务器的情况下，每个客户端负责一个小范围的路由，并负责存储一小部分数据，从而实现整个DHT网络的寻址和存储，其中BT客户端包含一个DHT节点，用来联系DHT中其他节点，从而得到peer的位置，进而通过BitTorrent协议下载。")]),t._v(" "),e("p",[e("strong",[t._v("Kademlia算法")])]),t._v(" "),e("p",[t._v("Kademlia是DHT网络的一种实现。在Kademlia网络中，距离是通过异或(XOR)计算的，结果为无符号整数。distance(A, B) = |A xor B|，数值越小表示越近两个节点越接近。")]),t._v(" "),e("p",[e("strong",[t._v("KRPC协议")])]),t._v(" "),e("p",[t._v("KRPC是节点之间的交互协议，是由B编码组成的一个简单的RPC结构，它使用UDP报文发送，一个独立的请求包发出去，然后由另一个独立的包来回复（这也是UDP无连接特性所决定的，所以协议中肯定也会有让我们区分报文包的方法），要注意的是这个协议没有重发机制。")]),t._v(" "),e("p",[e("strong",[t._v("MagNet协议")])]),t._v(" "),e("p",[t._v("MagNet协议，也就是磁力链接。是一个通过sha1算法生成一个20字节长的字符串，P2P客户端使用磁力链接，下载资源的种子文件，然后根据种子文件下载资源。")])])}),[],!1,null,null,null);e.default=a.exports}}]);