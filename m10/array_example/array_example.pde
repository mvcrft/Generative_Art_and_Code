int [] A = {1,2,3,4,5,6};
int [] B = {10,20,30,40,50,60};
int [] C = {};

void setup(){
println("Before: ");
print("A: ");printArray(A);
print("B: ");printArray(B);
print("C: ");printArray(C);
doArrayStuff();
println("After: ");
print("A: ");printArray(A);
print("B: ");printArray(B);
print("C: ");printArray(C);


}

void printArray(int[] value){
  for(int i = 0;i < value.length;i++){
  print(value[i] + " ");
  }
  print("\n");
}


void doArrayStuff(){
  //C = append(A,360);
  //C = expand(C,3);
  //C = shorten(C);
  //C = concat(A,B);
  //C = splice(A,B,3);
  C = subset(A,1);
};