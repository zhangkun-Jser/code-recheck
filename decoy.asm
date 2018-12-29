        SECTION .data

        msg db "Hello, world0!",0xa ; 
        len equ $ - msg

        SECTION .text
        global main

main:
        mov     eax,4
        mov     ebx,1
        mov     ecx,msg
        mov     edx,len
        int     0x80

        mov     eax,1
        mov     ebx,0
        int     0x80
