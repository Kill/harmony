var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    "name": {type : String},
    "gender": {type : String},
    "company": {type : String},
    "email": {type : String},
    "registered": {type : Boolean, default: false}
});

// var db = [
//   {
//     "_id": "5710deacc2fd7de052dc79c5",
//     "index": 0,
//     "guid": "9eea7562-4522-4f07-b9da-bc4741511435",
//     "isActive": true,
//     "balance": "$3,532.10",
//     "picture": "http://placehold.it/32x32",
//     "age": 24,
//     "eyeColor": "blue",
//     "name": "Butler Saunders",
//     "gender": "male",
//     "company": "EXOSIS",
//     "email": "butlersaunders@exosis.com",
//     "phone": "+1 (909) 573-3534",
//     "address": "406 Seeley Street, Thornport, North Carolina, 9580",
//     "about": "Aliquip ut sunt ullamco laboris sunt commodo sunt magna aliquip in exercitation. Ad duis incididunt elit ea labore cillum eu nostrud. Consectetur cillum deserunt Lorem reprehenderit occaecat excepteur labore ipsum aliqua sint mollit mollit sunt culpa. Cupidatat consectetur do duis fugiat ex ut anim qui minim ea.\r\n",
//     "registered": "2016-01-13T12:54:54 -02:00",
//     "latitude": 85.919259,
//     "longitude": -87.269189,
//     "tags": [
//       "magna",
//       "reprehenderit",
//       "est",
//       "sunt",
//       "commodo",
//       "ullamco",
//       "laboris"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Patrice Cohen"
//       },
//       {
//         "id": 1,
//         "name": "Cheryl Jefferson"
//       },
//       {
//         "id": 2,
//         "name": "Dolly Klein"
//       }
//     ],
//     "greeting": "Hello, Butler Saunders! You have 7 unread messages.",
//     "favoriteFruit": "strawberry"
//   },
//   {
//     "_id": "5710deac82451604703a83b2",
//     "index": 1,
//     "guid": "9365935f-b62d-4155-92f1-e16a842b2701",
//     "isActive": true,
//     "balance": "$3,673.02",
//     "picture": "http://placehold.it/32x32",
//     "age": 29,
//     "eyeColor": "brown",
//     "name": "Minnie Morris",
//     "gender": "female",
//     "company": "RODEOMAD",
//     "email": "minniemorris@rodeomad.com",
//     "phone": "+1 (827) 584-2681",
//     "address": "271 Argyle Road, Rivera, Utah, 3894",
//     "about": "In aute exercitation do aliquip eiusmod ipsum. Aliqua in veniam labore consectetur. Cillum fugiat enim anim sit cupidatat velit occaecat fugiat qui magna elit. Laboris pariatur eiusmod magna officia pariatur aute nisi sit culpa occaecat. Reprehenderit aliquip reprehenderit reprehenderit non Lorem nostrud cupidatat esse. Reprehenderit irure mollit consectetur velit.\r\n",
//     "registered": "2014-12-25T03:24:54 -02:00",
//     "latitude": 66.470882,
//     "longitude": -57.738323,
//     "tags": [
//       "quis",
//       "sunt",
//       "aute",
//       "labore",
//       "veniam",
//       "qui",
//       "excepteur"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Glenn Campos"
//       },
//       {
//         "id": 1,
//         "name": "Coleen Joyner"
//       },
//       {
//         "id": 2,
//         "name": "Darla Frank"
//       }
//     ],
//     "greeting": "Hello, Minnie Morris! You have 8 unread messages.",
//     "favoriteFruit": "apple"
//   },
//   {
//     "_id": "5710deace517ae4faf956662",
//     "index": 2,
//     "guid": "41ddf6af-18b9-4e42-a2ed-eafba8797aaa",
//     "isActive": false,
//     "balance": "$2,546.45",
//     "picture": "http://placehold.it/32x32",
//     "age": 26,
//     "eyeColor": "green",
//     "name": "Stella Brewer",
//     "gender": "female",
//     "company": "ZAYA",
//     "email": "stellabrewer@zaya.com",
//     "phone": "+1 (821) 514-2764",
//     "address": "882 Coventry Road, Kirk, Alaska, 4975",
//     "about": "Pariatur proident occaecat amet nisi amet amet ex ex enim est aliquip et fugiat. Culpa id voluptate aliquip elit esse. Sint do fugiat dolore aute nisi adipisicing nisi occaecat consectetur occaecat sunt. Adipisicing dolore aliqua officia laboris voluptate aute labore elit velit nisi et in deserunt. Labore tempor aute tempor officia occaecat cupidatat dolor ut minim non ad. Est ea ea fugiat cillum deserunt. Aliquip minim dolor officia sunt cupidatat officia tempor dolor dolor aliquip sint Lorem non.\r\n",
//     "registered": "2015-10-16T09:45:23 -03:00",
//     "latitude": 16.171931,
//     "longitude": 88.50533,
//     "tags": [
//       "incididunt",
//       "culpa",
//       "in",
//       "dolor",
//       "consequat",
//       "eu",
//       "in"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Allyson Castaneda"
//       },
//       {
//         "id": 1,
//         "name": "Diane Vang"
//       },
//       {
//         "id": 2,
//         "name": "Stafford Morrison"
//       }
//     ],
//     "greeting": "Hello, Stella Brewer! You have 6 unread messages.",
//     "favoriteFruit": "strawberry"
//   },
//   {
//     "_id": "5710deac7ff2381f1d87473e",
//     "index": 3,
//     "guid": "bb42511c-a41c-44bf-9ec1-09f4226ddc87",
//     "isActive": true,
//     "balance": "$3,585.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 31,
//     "eyeColor": "green",
//     "name": "Olga Conway",
//     "gender": "female",
//     "company": "UPLINX",
//     "email": "olgaconway@uplinx.com",
//     "phone": "+1 (817) 476-3624",
//     "address": "634 Gilmore Court, Sedley, Michigan, 6180",
//     "about": "Magna nulla labore dolore incididunt velit exercitation aliqua officia ipsum exercitation elit do. Est dolore mollit adipisicing labore ea dolore aliqua culpa. Excepteur nostrud enim in eiusmod esse nisi eu fugiat esse sint. Elit veniam exercitation sunt ea ipsum irure adipisicing irure ex cupidatat cillum dolore dolor.\r\n",
//     "registered": "2016-02-19T07:32:17 -02:00",
//     "latitude": -83.226708,
//     "longitude": -166.671958,
//     "tags": [
//       "et",
//       "consectetur",
//       "proident",
//       "proident",
//       "minim",
//       "cupidatat",
//       "cupidatat"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Hall Roach"
//       },
//       {
//         "id": 1,
//         "name": "Harriet Long"
//       },
//       {
//         "id": 2,
//         "name": "Crane Mccullough"
//       }
//     ],
//     "greeting": "Hello, Olga Conway! You have 5 unread messages.",
//     "favoriteFruit": "strawberry"
//   },
//   {
//     "_id": "5710deaca3c23dd2f078a574",
//     "index": 4,
//     "guid": "030abc4d-f432-4cb4-adfb-f5cfda7ef333",
//     "isActive": false,
//     "balance": "$1,453.91",
//     "picture": "http://placehold.it/32x32",
//     "age": 23,
//     "eyeColor": "green",
//     "name": "Tracey Singleton",
//     "gender": "female",
//     "company": "QNEKT",
//     "email": "traceysingleton@qnekt.com",
//     "phone": "+1 (817) 466-3308",
//     "address": "769 Wythe Place, Woodburn, New York, 2731",
//     "about": "Magna eu eiusmod id ullamco eiusmod do nostrud sunt ipsum et. Eu commodo tempor consequat elit. Irure labore aute sint aliqua duis ex et. Ea ea ex culpa irure cupidatat dolor duis eu. In fugiat fugiat laborum ut ad quis adipisicing.\r\n",
//     "registered": "2014-08-28T03:28:56 -03:00",
//     "latitude": -85.002852,
//     "longitude": 113.524398,
//     "tags": [
//       "magna",
//       "cillum",
//       "irure",
//       "culpa",
//       "enim",
//       "do",
//       "ea"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Gordon Daugherty"
//       },
//       {
//         "id": 1,
//         "name": "David Ferguson"
//       },
//       {
//         "id": 2,
//         "name": "Elvira Reynolds"
//       }
//     ],
//     "greeting": "Hello, Tracey Singleton! You have 10 unread messages.",
//     "favoriteFruit": "apple"
//   }
// ];

module.exports = mongoose.model('User', userModel);