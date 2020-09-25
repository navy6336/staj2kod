//login ekranına dönüşteki session kontrolü.
exports.login = function (req, res) {


   if (req.session.admin) { //eğer admin oluşmuşsa post giris ile
       res.render('second.ejs');
   } else {
       message= '';
       res.render('index.ejs',{message:message});
   }

};
//login ekranının doğrulaması.
exports.loginPOST = function(req, res){
   var message = '';
   var sess = req.session; 

   
      var post  = req.body;
      var tc= post.tc;
      var pass= post.password;
     
      var sql="SELECT * FROM doktorbilgileri WHERE `tc`='"+tc+"' and password = '"+pass+"'";                           
      db.query(sql, function(err, results){     
         if(results!=0){
            req.session.admin = results[0].id;
            console.log(req.session.admin);
            console.log(req.session.user = results[0]);
            res.redirect('/second');
         }
         else{
            message = 'T.C. veya şifreniz yanlış.';
            res.render('index.ejs',{message: message});
         }
                 
      });
}
//login ekranından sonra gelecek sayfanın açılışı ve veritabanından değerleri çekme.
exports.second = function(req, res){
   if(req.session.admin){
      userId = req.session.admin
      var sql="SELECT * FROM doktorbilgileri WHERE `id`='"+userId+"'";
      db.query(sql, function(err,results,type){
      res.render('second.ejs',{data:results});
      });
   }
   else{
      req.session.destroy();
      res.redirect('/login');
   }
};
//çıkış yapma.
exports.logout=function(req,res){
   req.session.destroy();
   res.redirect("/second");
};
//hasta ekranına yönlendirme.
exports.hasta = function(req,res){
   if(req.session.admin){
      console.log(req.session.admin);
      var sql="SELECT hastabilgileri.tc, hastabilgileri.ad, hastabilgileri.soyad, hastabilgileri.tanı, doktorbilgileri.id FROM hastabilgileri INNER JOIN doktorbilgileri ON doktorbilgileri.id = hastabilgileri.doktorid WHERE  `doktorid`='"+req.session.admin+"'";
      db.query(sql, function(err,results,detay){
         if (err) {
            console.log("\n\n\n err Oluştu! \n\n\n");
            console.log(err);
            res.render("second.ejs");
        } else {
            console.log("Personel Listeleme Başarılı");
            res.render('hasta.ejs', {
                data1: results
            });
        }
      });
   }else{
      req.session.destroy();
      res.redirect('/login');
   };
};
//kayıt ekranına yönlendirme.
exports.kayit = function (req, res) {

   if (req.session.admin) {
      userId = req.session.admin
      var sql="SELECT id FROM doktorbilgileri WHERE `id`='"+userId+"'";
      db.query(sql, function(err,results,type){
      res.render('kayit.ejs',{data:results});
      });
   } else {
      req.session.destroy();
      res.redirect('/login');
   }
};
//kayıt ekranındaki post'un çalıştırılmasında çalışan.
exports.kayitPOST = function (req, res) {
   if(req.session.admin){
      userId=req.session.admin;
      var tc = parseInt(req.body.tc);
      var ad = req.body.ad.toUpperCase();
      var soyad = req.body.soyad.toUpperCase();
      var telefon = parseInt(req.body.telefon);
      var adres = req.body.adres.toUpperCase();
      var tani = req.body.tani.toUpperCase();
      var sql = "INSERT INTO hastabilgileri (tc,ad,soyad,telefon,adres,doktorid,tanı) VALUES('" + tc + "','" + ad + "','" + soyad + "','" + telefon + "','" + adres + "','" + req.session.admin + "','" + tani + "')";
      db.query(sql, function (err) {
         if (err) {
            console.log(err);
         } else {
               
            console.log("Yeni Kayıt Başarılıyla Eklendi ...\n\n ");
            message='veritabanına eklendi!';
            res.render("kayit.ejs",{message: message});
         }
      });
      }
   else{
      message ='';
      res.render('index.ejs',{message:message});
   }
}
