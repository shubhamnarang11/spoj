#include<iostream.h>
#include<conio.h>
void main()
{
    int a,b,i,tmp;
    cout<<"enter values of a & b";
    cin>>a>>b;
    if(b==0)
    cout<<"1";
    else
    {
        tmp=a;
        for(i=1;i<b;i++)
        {
            a=tmp*a;
        }
        cout<<"result is:"<<a;
    }
}
