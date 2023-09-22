interface Printer {
    print();
}
interface Fax {
    fax();
}
interface Scanner{
    scan();
}
class AllInOnePrinter implements Printer, Fax , Scanner{
    print() {
        
    }
    fax() {
        
    }
    scan() {
        
    }
}

class EconomicPrinter implements Printer {
     print() {
         
     }
}