(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{278:function(s,e,t){"use strict";t.r(e);var a=t(13),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[s._v("#")]),s._v(" SQL")]),s._v(" "),e("p",[e("strong",[s._v("数据库发送邮件")])]),s._v(" "),e("p",[s._v("EXEC msdb.dbo.sp_send_dbmail"),e("br"),s._v("\n@profile_name = 'KsmDataBaseEmail',         --配置文件名称"),e("br"),s._v("\n@recipients = 'taochenglin@key-smile.com',  --收件email地址"),e("br"),s._v("\n@subject = 'SQL邮件',                 --邮件主题"),e("br"),s._v("\n@body = '测试'            --邮件正文内容")]),s._v(" "),e("p",[e("strong",[s._v("日期")])]),s._v(" "),e("p",[s._v("SELECT CONVERT(date,GETDATE(),120)\n格式为'2019-10-17'")]),s._v(" "),e("p",[e("strong",[s._v("库中各表的行数")])]),s._v(" "),e("p",[s._v("select schema_name(t.schema_id) as [Schema], t.name as TableName,i.rows as [RowCount]\nfrom sys.tables as t, sysindexes as i\nwhere t.object_id = i.id and i.indid <=1\norder by i.rows desc")])])}),[],!1,null,null,null);e.default=n.exports}}]);