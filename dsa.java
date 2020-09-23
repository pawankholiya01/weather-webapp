
abstract class A {
	A(){
	}

	abstract void printA();


}

abstract class B extends A {
	abstract void printB();
}

class C extends B{

	C(){
		
	}

	

	void printA()
	{
		System.out.println("\tFunction of class A");
	}

	void printB()
	{
		System.out.println("\tFunction of class B ");
		
	}

	public static void main(String[] args) 
    {
    	System.out.println("\n\nby : ");

    	

		
    	A a = new C();
    	a.printA();
    	B b = new C();
    	b.printB();


    }

}

