PGDMP         1                z           burgerelite    13.4    13.4 $    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16403    burgerelite    DATABASE     o   CREATE DATABASE burgerelite WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE burgerelite;
                postgres    false            ?            1259    16609 
   categories    TABLE     ?   CREATE TABLE public.categories (
    id integer NOT NULL,
    cat_name character varying(20) NOT NULL,
    cat_link character varying(20) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            ?            1259    16607    categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    203            ?           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    202            ?            1259    16634    food    TABLE     /  CREATE TABLE public.food (
    food_id integer NOT NULL,
    name character varying(30) NOT NULL,
    size character varying(10),
    ingredients text[],
    price numeric(5,2) NOT NULL,
    image character varying(255) NOT NULL,
    link character varying(30) NOT NULL,
    catg_id integer NOT NULL
);
    DROP TABLE public.food;
       public         heap    postgres    false            ?            1259    16632    food_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.food_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.food_id_seq;
       public          postgres    false    205            ?           0    0    food_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.food_id_seq OWNED BY public.food.food_id;
          public          postgres    false    204            ?            1259    16663    orders    TABLE     8  CREATE TABLE public.orders (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    zipcode character(5) NOT NULL,
    items text[] NOT NULL,
    date timestamp with time zone NOT NULL,
    price numeric(5,2) NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            ?            1259    16661    orders_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    207            ?           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    206            ?            1259    16455    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(75) NOT NULL,
    hash character varying(100) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16453    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    201            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    200            8           2604    16612    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            9           2604    16637    food food_id    DEFAULT     g   ALTER TABLE ONLY public.food ALTER COLUMN food_id SET DEFAULT nextval('public.food_id_seq'::regclass);
 ;   ALTER TABLE public.food ALTER COLUMN food_id DROP DEFAULT;
       public          postgres    false    204    205    205            :           2604    16666 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            7           2604    16458    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            ?          0    16609 
   categories 
   TABLE DATA           <   COPY public.categories (id, cat_name, cat_link) FROM stdin;
    public          postgres    false    203   '       ?          0    16634    food 
   TABLE DATA           ]   COPY public.food (food_id, name, size, ingredients, price, image, link, catg_id) FROM stdin;
    public          postgres    false    205   e'       ?          0    16663    orders 
   TABLE DATA           Y   COPY public.orders (id, name, address, zipcode, items, date, price, user_id) FROM stdin;
    public          postgres    false    207   5+       ?          0    16455    users 
   TABLE DATA           :   COPY public.users (id, username, email, hash) FROM stdin;
    public          postgres    false    201   0,       ?           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 4, true);
          public          postgres    false    202            ?           0    0    food_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.food_id_seq', 24, true);
          public          postgres    false    204            ?           0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 7, true);
          public          postgres    false    206            ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 78, true);
          public          postgres    false    200            B           2606    16614    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    203            D           2606    16642    food food_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.food
    ADD CONSTRAINT food_pkey PRIMARY KEY (food_id);
 8   ALTER TABLE ONLY public.food DROP CONSTRAINT food_pkey;
       public            postgres    false    205            F           2606    16671    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    207            <           2606    16464    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    201            >           2606    16460    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    201            @           2606    16462    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    201            G           2606    16643    food food_catg_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.food
    ADD CONSTRAINT food_catg_id_fkey FOREIGN KEY (catg_id) REFERENCES public.categories(id);
 @   ALTER TABLE ONLY public.food DROP CONSTRAINT food_catg_id_fkey;
       public          postgres    false    203    205    2882            H           2606    16672    orders orders_user_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    201    207    2878            ?   F   x?3?t*-JO-*?L??\F??UU?? ?˘ӿ$#??3Dr?pg??+?)?e?es??\1z\\\ ??      ?   ?  x??V?n?6]?_Ah? ?$˙dk??A;?1???̆?odb$Q ?	?A????X/???h?Y??x?9????Ɍ,????~h??&3Z???????$??2ֆ??Rn??lA?uɊbX??Q]????v?L???*?pW???DL_ j?? ?`?;87"? M?{?r?*??c]?*l@?7??)YHΆY02?hqF?M>=bgaJV?^?n??C????????~??\?ahr?hO,??t?=2?#?xpIF?I3?Ȝ$W???뼩?k4?!??6u|? ??<??n=??
c????y??Iҙ'V?8|?p?!~?48??%3t???Fs(
ZC]??Q?+X?DQ??(/???????Bеg??!dG+?(??'?w??L?F???=+Ú?~?(?ւ?????MR?i?~???R???????F]?!???%??w0?z??І?9??W????^Ȱ???'٬?~?E?? ?z?/Z]G8\#????%k???>??'??$?l???=]??+??Gs?euJٮ??;?D?|???y??????_+}m?ڋr?wS??te??????gz??P???r?4?0?d?9%]??3z? ??,??{?QA?*?v?Z<=?q١:?ݔ??/{-?B?s??X??????????p}?=?tpM???J?a??ľ?h?????G?͐??k??"=?񭂊o?{#?]?? c??#????k???c?Ojl?N?._???dB~|j??YuFk?X?a?w???o???t\??vs?%!?|?w'P?k???R??z¿???oRu?f2l'?	h'???????A??xg'?@m??=?{+???!K?N?g?|ٝz?k???\???????????L??7?-a????]۠!???S7Ӷj??ܰ????.??W??ykut?^??%?R?Oj????$?h?Vڧ?`0?g3l      ?   ?   x????k?0?g?S/R?ө????ԡ?vI????Xv)?~?ZiZHH???q??{Ȟ???H??.????$ ?a????ۦ??b7?????S?}[??'C@U*(??m??Z? J??5?|G??b??[?S?:λ?.??]*%?q?4ί@1%?g???m&z?????y?a?1??o?S???44?y3??DWp| +????UƱ?Br?????RW.;k?]6~???/D?tA      ?     x?m̹??0 @?:???(F;h?ut?L?@X?????Lms_????H?????=e?QP0R?H?G??K?fr:?ɞ?ұ???6J
RՊ?;?G?-?ɑws?)؆x
?4?{??ʶ3?6?go独??R??>?D????|j~??>&???'????;?????0????a?????Ʀ??@!???\?ʑ*?p]????]EVA<?H?????5????S?s??U[?????sY?!U?k3P??N???f&??|k????qY     