[jsrsasign](https://github.com/kjur/jsrsasign/) | [他のアドオン](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On) | [English](README.md)

# jsrsasign-oid-jpcomreg
[jsrsasign](https://github.com/kjur/jsrsasign)は、JavaScript実装の暗号、PKIライブラリです。jsrsasignはアドオンで拡張することが可能で、本パッケージを追加することで、法務省の商業登記証明書で使われるオブジェクト識別子とその名前の定義をjsrsasignに追加することができます。

## アドオンの追加方法
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-jpcomreg").addon(jsrsasign);
```

## 定義されたオブジェクト識別子の名称(文字列)
名称定義されたオブジェクト識別子は[ソースコード](https://github.com/kjur/jsrsasign-oid-jpcomreg/blob/main/lib/index.js)で確認できます。

## 使用例
アドオンを読み込んで以降、定義されたオブジェクト識別子名が使用できます。例えば、jsrsasignではASN1HEX.dumpでASN.1ダンプの文字列が得られますが、商業登記証明書の拡張領域の表示では拡張名が表示されます。

```JavaScript
jsrsasign.ASN1HEX.dump("3081...")
```
以下のようにオブジェクト識別子の名称(jpcomreg-*)が表示されます。
```
SEQUENCE
  ObjectIdentifier jpcomreg-certificatePolicies (1 2 392 100300 1 1 1)
  OCTETSTRING, encapsulates
    SEQUENCE
　　後略

SEQUENCE
  ObjectIdentifier jpcomreg-registrar (1 2 392 100300 1 1 2)
  OCTETSTRING, encapsulates
    UTF8String '東京法務局登記官'

SEQUENCE
  ObjectIdentifier jpcomreg-registeredCorporationInfo (1 2 392 100300 1 1 3)
  OCTETSTRING, encapsulates
    SEQUENCE
      [0]
        UTF8String 'サンプル株式会社'
      [1]
        PrintableString '010701111111'
      [2]
        UTF8String '東京都渋谷区宇田川町１番１号'
      [3]
        UTF8String '山田太郎'
      [4]
        UTF8String '代表取締役'
      [6]
        UTF8String '東京法務局渋谷出張所'
```

また、証明書拡張をOID名で取得することができるようになります。

```
var x = new rs.X509(pem);
var hExtV = rs.ASN1HEX.getTLV(x.hex, x.getExtInfo("jpcomreg-registrar").vidx);
console.log(rs.ASN1HEX.parse(hExtV));
// 出力 { utf8str: { str: '東京法務局登記官' } }
```

## 参考
- 商業登記法 英訳付き
  - http://www.japaneselawtranslation.go.jp/law/detail/?id=1863&vm=04&re=01
- 商業登記証明書の証明書プロファイル (拡張部分)
  - https://www.moj.go.jp/ONLINE/CERTIFICATION/SYSTEM/PDF/main.pdf#page=6




