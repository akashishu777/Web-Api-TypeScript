import * as express from 'express'
import Test from '../models/Test'

const router = express.Router();

router.get('/search', (req: any, res: any) => {

    res.json(
        {
            tests: [
                {
                    "id": 1,
                    "name": "Milliman Recruitement",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "topics": [
                        {
                            "name": "SQL",
                            "questions": 20
                        },
                        {
                            "name": "DotNET",
                            "questions": 20
                        },
                        {
                            "name": "Aptitude",
                            "questions": 30
                        }
                    ],
                    "duration": 50,
                    "difficulty": 2
                },
                {
                    "id": 2,
                    "name": "TCS Mock CodeVita",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "topics": [
                        {
                            "name": "C",
                            "questions": 10
                        },
                        {
                            "name": "C++",
                            "questions": 10
                        },
                        {
                            "name": "Java",
                            "questions": 10
                        },
                        {
                            "name": "Algorithim",
                            "questions": 10
                        }
                    ],
                    "duration": 180,
                    "difficulty": 3
                },
                {
                    "id": 3,
                    "name": "Linux Expertise",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "topics": {
                        "Basics": 15,
                        "Flavours": 15,
                        "Kernel": 15
                    },
                    // @ts-ignore: we have duplicate object topics? we need to remove either of one
                    "topics": [
                        {
                            "name": "Basics",
                            "questions": 15
                        },
                        {
                            "name": "Flavours",
                            "questions": 15
                        },
                        {
                            "name": "Kernel",
                            "questions": 15
                        }
                    ],
                    "duration": 90,
                    "difficulty": 2
                }
            ]
        }
    );

});

router.get('/fetchAll', (req, res) => {

    Test.find({}).then((test: any) => {
        if (test) {
            res.json({ allTests: test });
        }
        else {
            res.status(400).json({ errors: { tests: 'Error while retrieving tests' } });
        }
    })


    // res.json(
    //     {
    //         allTests: [
    //             {
    //                 "id": 1,
    //                 "name": "Milliman Recruitement",
    //                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //                 "topics": [
    //                     {
    //                         "name": "SQL",
    //                         "questions": 20
    //                     },
    //                     {
    //                         "name": "DotNET",
    //                         "questions": 20
    //                     },
    //                     {
    //                         "name": "Aptitude",
    //                         "questions": 30
    //                     }
    //                 ],
    //                 "duration": 50,
    //                 "difficulty": 2
    //             },
    //             {
    //                 "id": 2,
    //                 "name": "TCS Mock CodeVita",
    //                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //                 "topics": [
    //                     {
    //                         "name": "C",
    //                         "questions": 10
    //                     },
    //                     {
    //                         "name": "C++",
    //                         "questions": 10
    //                     },
    //                     {
    //                         "name": "Java",
    //                         "questions": 10
    //                     },
    //                     {
    //                         "name": "Algorithim",
    //                         "questions": 10
    //                     }
    //                 ],
    //                 "duration": 180,
    //                 "difficulty": 3
    //             },
    //             {
    //                 "id": 3,
    //                 "name": "Linux Expertise",
    //                 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //                 "topics": {
    //                     "Basics": 15,
    //                     "Flavours": 15,
    //                     "Kernel": 15
    //                 },
    //                 "topics": [
    //                     {
    //                         "name": "Basics",
    //                         "questions": 15
    //                     },
    //                     {
    //                         "name": "Flavours",
    //                         "questions": 15
    //                     },
    //                     {
    //                         "name": "Kernel",
    //                         "questions": 15
    //                     }
    //                 ],
    //                 "duration": 90,
    //                 "difficulty": 2
    //             }
    //         ]
    //     }
    // );
});

export default router