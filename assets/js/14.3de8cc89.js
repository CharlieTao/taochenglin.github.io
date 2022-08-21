(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{276:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),a("h1",{attrs:{id:"auto-mount-drive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-mount-drive"}},[t._v("#")]),t._v(" auto mount drive")]),t._v(" "),a("p",[t._v("sudo blkid\nsudo gedit /etc/fstab\nUUID=xxxx /data ntfs defaults 0 0")]),t._v(" "),a("h1",{attrs:{id:"apache-listen-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-listen-port"}},[t._v("#")]),t._v(" apache listen port")]),t._v(" "),a("p",[t._v("sudo gvim /etc/apache2/ports.conf\nListen 8081\nsystemctl restart apache2")]),t._v(" "),a("h1",{attrs:{id:"sleep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleep"}},[t._v("#")]),t._v(" sleep")]),t._v(" "),a("p",[t._v("systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target\nsystemctl status sleep.target suspend.target hibernate.target hybrid-sleep.target")]),t._v(" "),a("h1",{attrs:{id:"build-unreal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-unreal"}},[t._v("#")]),t._v(" build Unreal")]),t._v(" "),a("p",[t._v("./Setup.sh && ./GenerateProjectFiles.sh && make\ncd Engine/Binaries/Linux && ./UE4Editor")]),t._v(" "),a("h1",{attrs:{id:"dos2unix-recursive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos2unix-recursive"}},[t._v("#")]),t._v(" dos2unix recursive")]),t._v(" "),a("p",[t._v("find . -type f -print0 | xargs -0 dos2unix")]),t._v(" "),a("h1",{attrs:{id:"clang-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-version"}},[t._v("#")]),t._v(" clang version")]),t._v(" "),a("p",[t._v("sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/lib/llvm-8/bin/clang++ 100 &&\nsudo update-alternatives --install /usr/bin/clang clang /usr/lib/llvm-8/bin/clang 100\nsudo update-alternatives --config clang\nsudo update-alternatives --config clang++")]),t._v(" "),a("h1",{attrs:{id:"install-build-essential"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-build-essential"}},[t._v("#")]),t._v(" install build-essential")]),t._v(" "),a("p",[t._v("deb http://archive.ubuntu.com/ubuntu/ focal-proposed main\nsudo apt-get update\nsudo apt-get install build-essential")]),t._v(" "),a("h1",{attrs:{id:"gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu"}},[t._v("#")]),t._v(" GPU")]),t._v(" "),a("p",[t._v("sudo apt install nvidia-cuda-toolkit\nnvidia-smi")]),t._v(" "),a("p",[t._v("wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin\nsudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600\nwget https://developer.download.nvidia.com/compute/cuda/11.4.1/local_installers/cuda-repo-ubuntu2004-11-4-local_11.4.1-470.57.02-1_amd64.deb\nsudo dpkg -i cuda-repo-ubuntu2004-11-4-local_11.4.1-470.57.02-1_amd64.deb\nsudo apt-key add /var/cuda-repo-ubuntu2004-11-4-local/7fa2af80.pub\nsudo apt-get update\nsudo apt-get -y install cuda")]),t._v(" "),a("h1",{attrs:{id:"command-connection-fail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-connection-fail"}},[t._v("#")]),t._v(" command connection fail")]),t._v(" "),a("p",[t._v("env | grep proxy")]),t._v(" "),a("p",[t._v("no_proxy=localhost,127.0.0.0/8,::1\nftp_proxy=http://127.0.0.1:1080/\nhttps_proxy=http://127.0.0.1:1080/\nhttp_proxy=http://127.0.0.1:1080/\nall_proxy=socks://127.0.0.1:1080/")]),t._v(" "),a("p",[t._v("Failed to download 'http://cdn.unrealengine.com/dependencies/UnrealEngine-6550956-1c306f258fd64028a871dd92ab6159f3/04affccd517fd5ab2bdde8658f78625c54fe2f43': Error: ConnectFailure (Connection refused) (WebException)\nsolution:\nsudo ./Setup.sh")]),t._v(" "),a("p",[t._v("curl www.baidu.com\ncurl: (7) Failed to connect to 127.0.0.1 port 1080: Connection refused\nsolution:\nsudo curl www.baidu.com")]),t._v(" "),a("p",[t._v("can not find where set the default proxy.\nunset all proxy in bashrc can connect internet.\nshadowsocks use this proxy port to server port.")]),t._v(" "),a("h1",{attrs:{id:"shadowsocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks"}},[t._v("#")]),t._v(" shadowsocks")]),t._v(" "),a("p",[t._v("systemctl stop shadowsocks-libev.service\nssserver as server, run on remote end. config file locate /etc/shadowsocks-libev/config.json\nsslocal as local.")]),t._v(" "),a("h1",{attrs:{id:"grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),a("p",[t._v("sudo grep -r -i http_proxy=http://127.0.0.1:1080/ ~")]),t._v(" "),a("h1",{attrs:{id:"llvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llvm"}},[t._v("#")]),t._v(" llvm")]),t._v(" "),a("p",[t._v("wget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\nsudo ./llvm.sh 15")]),t._v(" "),a("h1",{attrs:{id:"gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook"}},[t._v("#")]),t._v(" gitbook")]),t._v(" "),a("p",[t._v("sudo npm install gitbook-cli -g\ngitbook -V\ngitbook init\ngitbook serve\ngitbook build")])])}),[],!1,null,null,null);a.default=n.exports}}]);