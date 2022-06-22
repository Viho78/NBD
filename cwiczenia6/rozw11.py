import riak
myClient = riak.RiakClient(pb_port=8087)
bucketProd = myClient.bucket('s24206')



#dokument do bazy
produkt = {'nazwa': 'marchewka', 'rodzaj': 'warzywo', 'ilosc': 555, 'cena': 8}
produkt1 = bucketProd.new(produkt['nazwa'], data=produkt)

#bucketProd.new('s24206', data={'nazwa': 'marchewka', 'rodzaj': 'warzywo', 'ilosc': 555, 'cena': 8})
#produkt1 = bucketProd.get('s24206')

#print('wrzucenie do bazy wypisanie i pobranie')
#print(produkt1.produkt)

produkt1.store()

#pobranie i wypisanie
pobierz = bucketProd.get(produkt1.key)
print('wrzucenie do bazy wypisanie i pobranie')
print(pobierz.data)

#modyfikacja
updateData=pobierz.data
updateData['cena'] = 4
updateData['ilosc'] = 100
pobierz.data = updateData
pobierz.store()

#pobranie i wypisanie
pobierz = bucketProd.get(produkt1.key)
print('zmodyfikacja pobranie wypisanie')
print(pobierz.data)

#usuniecie
pobierz.delete()

#proba pobrania
pobierz = bucketProd.get(produkt1.key)






