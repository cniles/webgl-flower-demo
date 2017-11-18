var flowerMesh = {
    name : "flower",
    
    vertices : {
	count : 81,
	stride : 3,
	data : [1.940753,-2.092339,0.1266267,1.562792,-2.483352,0.1266267,0.6746678,-2.259169,0.1120927,0.1316539,-2.185033,0.1267402,-0.21492,-1.74739,-0.2458263,-0.375312,-1.935838,-0.2725284,-0.5190169,-2.031214,0.08132666,-1.12205,-1.940573,0.08132666,-1.869127,-1.974472,0.2346016,2.119922,-1.37677,0.1266267,1.431758,-1.723348,-0.3894939,0.7351727,-1.783278,-0.3894939,0.3181995,-1.587605,-0.434376,-0.06576049,-1.151859,-0.2640772,-0.5937697,-1.47535,-0.5011935,-1.136784,-1.536258,-0.5011935,-1.664793,-1.45462,-0.5011935,-2.261642,-1.770567,0.2346016,2.039507,-0.8202508,0.1266267,1.410838,-1.11184,-0.3894939,0.885832,-1.051208,-0.5119708,0.387834,-0.8105216,-0.5119708,-0.08165365,-0.6763669,-0.3309161,-0.8797488,-0.7072647,-0.5379808,-1.317729,-0.7381627,-0.5379808,-1.91326,-0.8290796,-0.5011935,-2.534117,-1.020487,0.2346016,1.909456,-0.3698762,0.05861121,1.372439,-0.6228451,-0.3422996,0.7484029,-0.5262023,-0.5119708,0.1078595,-0.1174597,-0.434376,-0.05253243,-0.1408553,-0.434376,-0.1454028,-0.02920782,-0.434376,-1.13856,-0.09011524,-0.5379808,-1.711584,-0.07599884,-0.5011935,-2.278424,-3.19958e-4,0.08132666,1.617475,-0.1554665,-0.1861656,1.009941,-0.09783875,-0.2855195,0.6919987,-0.09122365,-0.2855195,0.2495166,0.0204249,-0.434376,-0.01590877,0.01203417,-0.3267326,-0.1312864,0.1761984,-0.434376,-0.9894008,0.2578364,-0.3052303,-1.434883,0.3619816,-0.3052303,-1.737821,0.41361,-0.3052303,1.484542,-0.05959635,-0.2812817,1.232623,0.2831232,-0.434376,0.8606636,0.4607908,-0.434376,0.1961115,0.1658121,-0.434376,0.0582267,0.24745,-0.434376,-0.004634022,0.2465617,-0.434376,-0.93027,0.7258264,-0.5492755,-1.303433,0.7924821,-0.4715216,-1.954318,0.9879691,-0.05354201,1.734236,0.02877348,-0.2364205,1.383282,0.5830605,-0.5260626,1.119356,0.8147446,-0.5260626,0.7654022,0.9203901,-0.5260626,0.1773766,0.7379473,-0.3075398,-0.2981157,1.02215,-0.4981822,-0.7736081,1.29885,-0.59981,-1.191785,1.22296,-0.4715216,-1.643107,1.308912,-0.1810389,1.752993,0.1988159,0.005951583,1.65998,0.8739948,-0.5260626,1.288021,1.24072,-0.5260626,0.8350367,1.337363,-0.5260626,0.2740194,1.100904,-0.3075398,-0.1189466,1.422618,-0.4715216,-0.4320905,1.616814,-0.4715216,-1.072636,1.713457,-0.4715216,-1.812049,1.776902,-0.05354201,1.872143,0.6367962,0.005951583,1.854297,1.153573,0.005951583,1.431321,1.581821,0.005951583,0.6377284,1.681466,0.005951583,0.2581263,1.448855,-0.230003,0.2027677,1.755565,-0.2566497,0.07734781,1.994589,-0.05354201,-0.6457234,2.158753,-0.05354201,-1.616374,2.172869,-0.05354201]
    },
    
    normals: {
	count : 81,
	stride : 3,
	data : [0.1951963,0.3020111,0.9330729,0.003967404,0.08700823,0.9961852,-0.1590319,0.307596,0.9381085,0.03885,0.4902799,0.8706626,0.297586,0.4261605,0.8542741,0.1107516,0.8121891,0.5727714,0.02984708,0.4972075,0.8670919,0.1208533,0.6813257,0.7218849,-0.1713614,0.3051241,0.9367352,0.2748497,0.7518845,0.599231,-0.3006073,0.2941069,0.9072543,0.08200323,0.6792505,0.7292703,0.5733818,0.4736472,0.6684774,0.2476271,0.7575305,0.6039613,-0.5525987,0.3162328,0.7710807,-0.6205329,0.01583909,0.78399,-0.09985655,0.01049834,0.9949339,0.02932828,0.01339757,0.9994507,-0.4238411,-0.0661031,0.9033173,-0.1046174,0.03061002,0.9940184,0.02813804,0.09308141,0.9952391,0.4883267,0.03497421,0.8719443,0.7410504,0.1125217,0.661916,-0.5969421,-0.08041626,0.7982116,0.1965392,0.03442484,0.9798578,-0.2451857,-0.08838158,0.9654225,-0.02676469,-0.2598651,0.9652699,-0.3966491,-0.1339457,0.9081088,-0.1242713,-0.2048707,0.9708548,0.005127072,-0.07284766,0.9973144,0.3445234,-0.2253181,0.9113132,0.7227393,-0.1676076,0.6704611,-0.5959655,-0.007385432,0.802942,0.1017792,-0.188055,0.9768365,-0.08941918,0.1806696,0.979461,0.03537094,-0.04953151,0.9981384,-0.07553327,0.005706906,0.9971008,-0.1120945,-0.108066,0.9877926,-0.1219825,-0.08938866,0.9884945,0.03732413,-0.03061002,0.9988098,0.3358562,-0.1690725,0.9265725,-0.3979614,0.07754749,0.9140904,-0.08484143,0.02337718,0.9960936,-0.0723899,-0.03561508,0.9967345,0.1068148,0.1924497,0.9754631,-0.009124994,0.3131809,0.9496139,0.01477092,0.226722,0.9738152,-0.01937925,0.009399652,0.9997559,0.3312479,0.03473001,0.9428694,0.4969329,-0.1664174,0.8516495,-0.1287881,0.4632099,0.8768273,0.07623523,0.08249151,0.9936522,-0.2244941,0.04818868,0.9732658,0.03234958,-0.08124023,0.9961547,-0.1915951,0.2307199,0.9539476,0.04437386,0.07763904,0.9959716,-0.01245152,-0.09494304,0.9953917,0.4002808,-0.0846278,0.9124424,0.5032503,-0.1141697,0.8565325,-0.6774194,-0.08005005,0.731193,0.1675466,0.01702928,0.9856868,-0.3087558,-0.1925413,0.9314249,-0.1571703,-0.451796,0.8781396,-0.5874508,-0.06152528,0.8068789,-0.247444,-0.47322,0.8454543,0.03930783,-0.07919549,0.9960631,0.1922666,-0.3847469,0.9027375,0.4764245,-0.1521347,0.8659322,-0.8752098,-0.02471995,0.4830775,0.07556378,-0.4923246,0.8670919,-0.1212195,-0.4528642,0.8832667,-0.1065706,-0.6048464,0.7891476,-0.7766045,-0.3916745,0.4933927,-0.3588366,-0.7388531,0.5703604,-0.1793572,-0.3345439,0.9251381,-0.08594012,-0.6511429,0.7540513,0.2991119,-0.42378,0.854915,-0.8988006,0.1329386,0.4177069,1.22074e-4,-0.8306528,0.5567492,0.3508713,0.5446944,0.761681,-0.1501815,0.537553,0.8297067]
    },

    texcoord: {
	stride: 2,
	count: 384,
	data: [0.4951224,0.3082882,0.4399855,0.3668569,0.4245204,0.2850615,0.2892842,0.3187718,0.2148261,0.3302841,0.2454447,0.1816632,0.5558236,0.277785,0.4951224,0.3082882,0.4510332,0.179929,0.3658581,0.3273608,0.2892842,0.3187718,0.3523832,0.1973899,0.6564686,0.286444,0.5558236,0.277785,0.5335591,0.1630849,0.4399855,0.3668569,0.3658581,0.3273608,0.4245204,0.2850615,0.2148261,0.3302841,0.1059191,0.2471088,0.1670966,0.1874381,0.6564686,0.286444,0.7305449,0.1607381,0.7551568,0.2939728,0.3264986,0.4364461,0.2652204,0.4321231,0.2892842,0.3187718,0.653446,0.3747966,0.5742166,0.3875113,0.6564686,0.286444,0.4376592,0.436455,0.3264986,0.4364461,0.3658581,0.3273608,0.1797881,0.4184956,0.05720108,0.3742916,0.2148261,0.3302841,0.7429884,0.3781859,0.653446,0.3747966,0.7551568,0.2939728,0.5041528,0.4213738,0.4376592,0.436455,0.4399855,0.3668569,0.2652204,0.4321231,0.1797881,0.4184956,0.2148261,0.3302841,0.5742166,0.3875113,0.5041528,0.4213738,0.4951224,0.3082882,0.4211149,0.5288432,0.2902881,0.522792,0.3264986,0.4364461,0.6499855,0.4445166,0.5548816,0.4613749,0.5742166,0.3875113,0.4425938,0.5050537,0.4211149,0.5288432,0.4376592,0.436455,0.2082278,0.5246924,0.09279048,0.513086,0.1797881,0.4184956,0.699043,0.4573684,0.6499855,0.4445166,0.7429884,0.3781859,0.4650291,0.5186221,0.4425938,0.5050537,0.4376592,0.436455,0.2902881,0.522792,0.2082278,0.5246924,0.2652204,0.4321231,0.5548816,0.4613749,0.4650291,0.5186221,0.5041528,0.4213738,0.4169905,0.5504146,0.3039609,0.5734193,0.4211149,0.5288432,0.5989541,0.5210007,0.5519408,0.5219789,0.5548816,0.4613749,0.4472427,0.537285,0.4169905,0.5504146,0.4211149,0.5288432,0.2383797,0.5887509,0.2050332,0.5978193,0.2082278,0.5246924,0.6567773,0.5031747,0.5989541,0.5210007,0.6499855,0.4445166,0.477616,0.5359442,0.4472427,0.537285,0.4650291,0.5186221,0.3039609,0.5734193,0.2383797,0.5887509,0.2902881,0.522792,0.5519408,0.5219789,0.477616,0.5359442,0.4650291,0.5186221,0.4412547,0.5682976,0.3197414,0.6367043,0.4169905,0.5504146,0.6259491,0.5759334,0.5727329,0.6013524,0.5989541,0.5210007,0.4502482,0.5684247,0.4412547,0.5682976,0.4169905,0.5504146,0.2500857,0.6606609,0.1438949,0.7220782,0.2050332,0.5978193,0.6693423,0.5266483,0.6259491,0.5759334,0.5989541,0.5210007,0.4699753,0.5567448,0.4502482,0.5684247,0.4472427,0.537285,0.3197414,0.6367043,0.2500857,0.6606609,0.2383797,0.5887509,0.5727329,0.6013524,0.4699753,0.5567448,0.5519408,0.5219789,0.4075233,0.6796436,0.3427494,0.7147442,0.3197414,0.6367043,0.6436156,0.6171874,0.6065954,0.649685,0.5727329,0.6013524,0.4624347,0.6503876,0.4075233,0.6796436,0.4412547,0.5682976,0.2659308,0.7217549,0.2063407,0.8195828,0.2500857,0.6606609,0.6951782,0.5603346,0.6436156,0.6171874,0.6259491,0.5759334,0.5569472,0.6645036,0.4624347,0.6503876,0.4699753,0.5567448,0.3427494,0.7147442,0.2659308,0.7217549,0.3197414,0.6367043,0.6065954,0.649685,0.5569472,0.6645036,0.5727329,0.6013524,0.432712,0.7373167,0.3737475,0.7776511,0.3427494,0.7147442,0.6824272,0.6579959,0.6302536,0.7094355,0.6065954,0.649685,0.4706559,0.6929935,0.432712,0.7373167,0.4075233,0.6796436,0.2903406,0.8119173,0.1550695,0.8703247,0.2063407,0.8195828,0.7275766,0.5955343,0.6824272,0.6579959,0.6436156,0.6171874,0.5667147,0.7229912,0.4706559,0.6929935,0.5569472,0.6645036,0.3737475,0.7776511,0.2903406,0.8119173,0.3427494,0.7147442,0.6302536,0.7094355,0.5667147,0.7229912,0.6065954,0.649685,0.4760497,0.7703439,0.4362782,0.8718985,0.432712,0.7373167,0.7164734,0.7749876,0.6544798,0.7979189,0.6302536,0.7094355,0.5020262,0.7876645,0.4760497,0.7703439,0.432712,0.7373167,0.3411598,0.9095429,0.1904429,0.9248551,0.2903406,0.8119173,0.7291418,0.680104,0.7164734,0.7749876,0.6824272,0.6579959,0.540821,0.8186894,0.5020262,0.7876645,0.5667147,0.7229912,0.4362782,0.8718985,0.3411598,0.9095429,0.3737475,0.7776511,0.6544798,0.7979189,0.540821,0.8186894,0.6302536,0.7094355,0.4510332,0.179929,0.4951224,0.3082882,0.4245204,0.2850615,0.3523832,0.1973899,0.2892842,0.3187718,0.2454447,0.1816632,0.5335591,0.1630849,0.5558236,0.277785,0.4510332,0.179929,0.3977094,0.2307696,0.3658581,0.3273608,0.3523832,0.1973899,0.6633514,0.1089091,0.6564686,0.286444,0.5335591,0.1630849,0.3658581,0.3273608,0.3977094,0.2307696,0.4245204,0.2850615,0.2454447,0.1816632,0.2148261,0.3302841,0.1670966,0.1874381,0.6633514,0.1089091,0.7305449,0.1607381,0.6564686,0.286444,0.3658581,0.3273608,0.3264986,0.4364461,0.2892842,0.3187718,0.5742166,0.3875113,0.5558236,0.277785,0.6564686,0.286444,0.4399855,0.3668569,0.4376592,0.436455,0.3658581,0.3273608,0.05720108,0.3742916,0.1059191,0.2471088,0.2148261,0.3302841,0.653446,0.3747966,0.6564686,0.286444,0.7551568,0.2939728,0.4951224,0.3082882,0.5041528,0.4213738,0.4399855,0.3668569,0.2892842,0.3187718,0.2652204,0.4321231,0.2148261,0.3302841,0.5558236,0.277785,0.5742166,0.3875113,0.4951224,0.3082882,0.2902881,0.522792,0.2652204,0.4321231,0.3264986,0.4364461,0.653446,0.3747966,0.6499855,0.4445166,0.5742166,0.3875113,0.4211149,0.5288432,0.3264986,0.4364461,0.4376592,0.436455,0.09279048,0.513086,0.05720108,0.3742916,0.1797881,0.4184956,0.6499855,0.4445166,0.653446,0.3747966,0.7429884,0.3781859,0.5041528,0.4213738,0.4650291,0.5186221,0.4376592,0.436455,0.2082278,0.5246924,0.1797881,0.4184956,0.2652204,0.4321231,0.5742166,0.3875113,0.5548816,0.4613749,0.5041528,0.4213738,0.3039609,0.5734193,0.2902881,0.522792,0.4211149,0.5288432,0.6499855,0.4445166,0.5989541,0.5210007,0.5548816,0.4613749,0.4425938,0.5050537,0.4472427,0.537285,0.4211149,0.5288432,0.2050332,0.5978193,0.09279048,0.513086,0.2082278,0.5246924,0.699043,0.4573684,0.6567773,0.5031747,0.6499855,0.4445166,0.4472427,0.537285,0.4425938,0.5050537,0.4650291,0.5186221,0.2383797,0.5887509,0.2082278,0.5246924,0.2902881,0.522792,0.5548816,0.4613749,0.5519408,0.5219789,0.4650291,0.5186221,0.3197414,0.6367043,0.3039609,0.5734193,0.4169905,0.5504146,0.5727329,0.6013524,0.5519408,0.5219789,0.5989541,0.5210007,0.4472427,0.537285,0.4502482,0.5684247,0.4169905,0.5504146,0.2383797,0.5887509,0.2500857,0.6606609,0.2050332,0.5978193,0.6567773,0.5031747,0.6693423,0.5266483,0.5989541,0.5210007,0.477616,0.5359442,0.4699753,0.5567448,0.4472427,0.537285,0.3039609,0.5734193,0.3197414,0.6367043,0.2383797,0.5887509,0.4699753,0.5567448,0.477616,0.5359442,0.5519408,0.5219789,0.4412547,0.5682976,0.4075233,0.6796436,0.3197414,0.6367043,0.6259491,0.5759334,0.6436156,0.6171874,0.5727329,0.6013524,0.4502482,0.5684247,0.4624347,0.6503876,0.4412547,0.5682976,0.2063407,0.8195828,0.1438949,0.7220782,0.2500857,0.6606609,0.6693423,0.5266483,0.6951782,0.5603346,0.6259491,0.5759334,0.4624347,0.6503876,0.4502482,0.5684247,0.4699753,0.5567448,0.2659308,0.7217549,0.2500857,0.6606609,0.3197414,0.6367043,0.5569472,0.6645036,0.4699753,0.5567448,0.5727329,0.6013524,0.4075233,0.6796436,0.432712,0.7373167,0.3427494,0.7147442,0.6436156,0.6171874,0.6824272,0.6579959,0.6065954,0.649685,0.4624347,0.6503876,0.4706559,0.6929935,0.4075233,0.6796436,0.2659308,0.7217549,0.2903406,0.8119173,0.2063407,0.8195828,0.6951782,0.5603346,0.7275766,0.5955343,0.6436156,0.6171874,0.4706559,0.6929935,0.4624347,0.6503876,0.5569472,0.6645036,0.2903406,0.8119173,0.2659308,0.7217549,0.3427494,0.7147442,0.5667147,0.7229912,0.5569472,0.6645036,0.6065954,0.649685,0.4362782,0.8718985,0.3737475,0.7776511,0.432712,0.7373167,0.6824272,0.6579959,0.7164734,0.7749876,0.6302536,0.7094355,0.4706559,0.6929935,0.5020262,0.7876645,0.432712,0.7373167,0.1904429,0.9248551,0.1550695,0.8703247,0.2903406,0.8119173,0.7275766,0.5955343,0.7291418,0.680104,0.6824272,0.6579959,0.5020262,0.7876645,0.4706559,0.6929935,0.5667147,0.7229912,0.3411598,0.9095429,0.2903406,0.8119173,0.3737475,0.7776511,0.540821,0.8186894,0.5667147,0.7229912,0.6302536,0.7094355]
    },

    elements: {
	count: 128,
	data: [12,0,0,13,1,1,4,2,2,15,3,3,16,4,4,7,5,5,11,6,6,12,0,7,3,7,8,14,8,9,15,3,10,6,9,11,10,10,12,11,6,13,2,11,14,13,1,15,14,8,16,4,2,17,16,4,18,17,12,19,8,13,20,10,10,21,0,14,22,9,15,23,23,16,24,24,17,25,15,3,26,19,18,27,20,19,28,10,10,29,22,20,30,23,16,31,14,8,32,25,21,33,26,22,34,16,4,35,18,23,36,19,18,37,9,15,38,21,24,39,22,20,40,13,1,41,24,17,42,25,21,43,16,4,44,20,19,45,21,24,46,12,0,47,32,25,48,33,26,49,23,16,50,28,27,51,29,28,52,20,19,53,31,29,54,32,25,55,22,20,56,34,30,57,35,31,58,25,21,59,27,32,60,28,27,61,18,23,62,30,33,63,31,29,64,22,20,65,33,26,66,34,30,67,24,17,68,29,28,69,30,33,70,21,24,71,41,34,72,42,35,73,32,25,74,37,36,75,38,37,76,29,28,77,40,38,78,41,34,79,32,25,80,43,39,81,44,40,82,34,30,83,36,41,84,37,36,85,28,27,86,39,42,87,40,38,88,30,33,89,42,35,90,43,39,91,33,26,92,38,37,93,39,42,94,30,33,95,50,43,96,51,44,97,41,34,98,46,45,99,47,46,100,37,36,101,49,47,102,50,43,103,41,34,104,52,48,105,53,49,106,44,40,107,45,50,108,46,45,109,37,36,110,48,51,111,49,47,112,40,38,113,51,44,114,52,48,115,43,39,116,47,46,117,48,51,118,38,37,119,59,52,120,60,53,121,51,44,122,55,54,123,56,55,124,47,46,125,58,56,126,59,52,127,50,43,128,61,57,129,62,58,130,52,48,131,54,59,132,55,54,133,46,45,134,57,60,135,58,56,136,48,51,137,60,53,138,61,57,139,51,44,140,56,55,141,57,60,142,47,46,143,68,61,144,69,62,145,60,53,146,64,63,147,65,64,148,56,55,149,67,65,150,68,61,151,59,52,152,70,66,153,71,67,154,62,58,155,63,68,156,64,63,157,55,54,158,66,69,159,67,65,160,57,60,161,69,62,162,70,66,163,60,53,164,65,64,165,66,69,166,56,55,167,77,70,168,78,71,169,68,61,170,73,72,171,74,73,172,65,64,173,76,74,174,77,70,175,68,61,176,79,75,177,80,76,178,70,66,179,72,77,180,73,72,181,64,63,182,75,78,183,76,74,184,66,69,185,78,71,186,79,75,187,69,62,188,74,73,189,75,78,190,65,64,191,3,7,192,12,0,193,4,2,194,6,9,195,15,3,196,7,5,197,2,11,198,11,6,199,3,7,200,5,79,201,14,8,202,6,9,203,1,80,204,10,10,205,2,11,206,14,8,207,5,79,208,4,2,209,7,5,210,16,4,211,8,13,212,1,80,213,0,14,214,10,10,215,14,8,216,23,16,217,15,3,218,20,19,219,11,6,220,10,10,221,13,1,222,22,20,223,14,8,224,26,22,225,17,12,226,16,4,227,19,18,228,10,10,229,9,15,230,12,0,231,21,24,232,13,1,233,15,3,234,24,17,235,16,4,236,11,6,237,20,19,238,12,0,239,33,26,240,24,17,241,23,16,242,19,18,243,28,27,244,20,19,245,32,25,246,23,16,247,22,20,248,35,31,249,26,22,250,25,21,251,28,27,252,19,18,253,18,23,254,21,24,255,30,33,256,22,20,257,34,30,258,25,21,259,24,17,260,20,19,261,29,28,262,21,24,263,42,35,264,33,26,265,32,25,266,28,27,267,37,36,268,29,28,269,31,29,270,40,38,271,32,25,272,44,40,273,35,31,274,34,30,275,27,32,276,36,41,277,28,27,278,40,38,279,31,29,280,30,33,281,43,39,282,34,30,283,33,26,284,29,28,285,38,37,286,30,33,287,51,44,288,42,35,289,41,34,290,47,46,291,38,37,292,37,36,293,40,38,294,49,47,295,41,34,296,43,39,297,52,48,298,44,40,299,36,41,300,45,50,301,37,36,302,39,42,303,48,51,304,40,38,305,42,35,306,51,44,307,43,39,308,48,51,309,39,42,310,38,37,311,50,43,312,59,52,313,51,44,314,46,45,315,55,54,316,47,46,317,49,47,318,58,56,319,50,43,320,62,58,321,53,49,322,52,48,323,45,50,324,54,59,325,46,45,326,58,56,327,49,47,328,48,51,329,61,57,330,52,48,331,51,44,332,57,60,333,48,51,334,47,46,335,59,52,336,68,61,337,60,53,338,55,54,339,64,63,340,56,55,341,58,56,342,67,65,343,59,52,344,61,57,345,70,66,346,62,58,347,54,59,348,63,68,349,55,54,350,67,65,351,58,56,352,57,60,353,70,66,354,61,57,355,60,53,356,66,69,357,57,60,358,56,55,359,78,71,360,69,62,361,68,61,362,64,63,363,73,72,364,65,64,365,67,65,366,76,74,367,68,61,368,80,76,369,71,67,370,70,66,371,63,68,372,72,77,373,64,63,374,76,74,375,67,65,376,66,69,377,79,75,378,70,66,379,69,62,380,75,78,381,66,69,382,65,64,383]
    },

    translate: {
	x : 0.003995206, y : 0.008522391, z : 0.4313938
    }
    
};