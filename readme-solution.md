# task-solution-adımları
1. normalde bu uygulamayı tek makinede de calıstırabiliriz ama ben 3 ayrı makinede calıstırdım. asıl uygulama backend tarafında yani nodejs tarafında calısır, react ile arayuz yani goruntu kazandırılır bu yuzden bunların baglantısı yapılmalıdır. daha sonra ayrıca database ile de nodejs baglantısı yapılmalıdır (3 tane playbook yazarak bu isleri yaptım ayrıca bir makineyide ansible kontrole node olarak ayarlayıp onunla diger 3 makine islemlerini yaptım, daha sonra anlatacagım)

2. oncelikle terraform dosyasıyla 4 nodelik yapıyı kurdum. myvars.auto.tfvars dosyasına gerekli keyleri ve private keyi kendimize gore degistirmeyi unutmayalım. ayrıca terraform dosyasına file provisioner kullanarak bazı dosyaları ec2ya kopyladım bu yuzden bu dosyalar main.tf calıstıgı dizinde olmalı veya main.tf dosyasında dosya pathleri duzeltilmelidir. kontrol node icin terraform dosyası ile ansible yuklu olusturdum ve ayrıca gerekli python3, pip, boto3 gibi yuklemeleri de yaptım

3. ansible.cfg inceleyebiliriz ve yapıyı awsde olusturdugum icin dynamic inventory kullandım. her makine icin dockerfile ve playbook hazırladım. ayrıca kontrole nodenin gerekli islemleri yapabilmesi icin bu nodeye gerekli aws role olusturup atadım(veya bunu olustururken aws CLI da yuklenip aws configure yapılabilir ama bu guvenlik olarak daha zayıf olur)

4. daha sonra image olusturmak icin 3 tane dockerfile olusturdum. ayrıca mkdir ansible && cd ansible && mkdir ansible-project playbooks && cd ansible-project && mkdir postgres nodejs react bu komutla dizinler olusturdum karısıklık olmaması icin uygulamaların dosyalarını kendi dizinlerine koydum. playbooks dizinine playbookları koydum, roles dizinini role için hazırladım ve teraform-files-for-infrastructure dizininde terraform dosyalarını olusturdum

5. daha sonra playbookları olusturdum. ve makinelere gerekli dosyaları controle node icinden gonderdim. ve playbookları calıstırıp yapıyı olusturdum

6. daha sonra ilk olarak nodejs .env icindeki DB_HOST kısmına postgre ec2nun private ip adresini yazdım ve ansible-playbook docker_postgre.yml --ask-vault-pass komutunu calıstırdım. bununla vault password ayarladıgım playbook calıstırdım ve vault sifresini 1234 ayarladıgım icin bunu yazdım

7. sonra docker_nodejs.yml calıstırdım

8. daha sonra react dizinindeki .env dosyasına nodejs public ip adresini yazdım ve docker_react.yml calıstırdım

9. daha sonra da uygulamayı react ec2 3000 porttan gordum. basit bir yapılacaklar uygulaması yapılacakları yazıp add yaparak kaydedebiliriz

10. ayrıca olusturdugum role kısmını da kullanmadım daha farklı kullanım şekli sağlamak için role ile ilgili kısmı olusturmuştum ama role ile ilgili işlem yapmadım