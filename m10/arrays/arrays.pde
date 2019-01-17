//arrays are limited to one datatype
int [] integers = new int[10];

void setup(){ 
size(800,600);
  for(int i = 0;i<10;i++){
  integers[i] = i * 10;
  }
}

void draw(){
  for(int i = 0;i<integers.length;i++){
    ellipse(i*50,height/2,integers[i],integers[i]);
  }
}