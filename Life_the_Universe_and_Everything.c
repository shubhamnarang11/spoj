/*This program is built by rahul sangwan*/
#include<iostream>
using namespace std;
int main()
{
	int a[100],count=0,i;
	cin>>a[count];
	while(a[count]!=42)
	{
		count++;
		cin>>a[count];
	}
	for(i=0;i<count;i++)
	{
		cout<<endl;
		cout<<a[i];
	}
} 
