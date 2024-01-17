import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

await queryRunner.query(
      `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('670983d8-fbc5-4564-aedf-399f2334fe76', '1Howard68@yahoo.com', 'Sokoke', 'https://i.imgur.com/YfJQV5z.png', 'Minskin', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('61ff9cd7-ae99-4c4b-94ab-a4832e94ddf2', '7Amaya_Kuhic-Von@gmail.com', 'Kurilian Bobtail', 'https://i.imgur.com/YfJQV5z.png', 'Balinese', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('3d7a6c10-0ef0-400d-9158-0e2d5d683fea', '13Leland.Dooley@yahoo.com', 'Selkirk Rex', 'https://i.imgur.com/YfJQV5z.png', 'Savannah', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cf4a65cc-b5cf-4315-9785-c0b113c45558', '25Philip.Schinner@yahoo.com', 'Maine Coon', 'https://i.imgur.com/YfJQV5z.png', 'Tonkinese', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cf15e26c-8e8e-4213-9b4e-3a21e5993a33', '31Kianna.Ward@hotmail.com', 'Russian Blue', 'https://i.imgur.com/YfJQV5z.png', 'Devon Rex', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e12a384c-1cb4-4757-b68f-388cd1ee0c8e', '37Dexter.Gusikowski39@gmail.com', 'LaPerm', 'https://i.imgur.com/YfJQV5z.png', 'Donskoy', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9411db0b-64e3-422c-80bc-0ee3120dc5c2', '43Winona44@hotmail.com', 'Korat', 'https://i.imgur.com/YfJQV5z.png', 'Snowshoe', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5e932f55-c381-4b6f-be4e-d38da5d01b58', '49Keely23@hotmail.com', 'Siberian', 'https://i.imgur.com/YfJQV5z.png', 'Russian Blue', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('48ae5bf7-073c-4eed-a87f-1edcda09403c', '55Oceane25@gmail.com', 'Thai', 'https://i.imgur.com/YfJQV5z.png', 'Korat', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('30009848-b09f-4036-af3f-0a9b7ac2c3b0', 'Russian Blue', 'Birman', 'LaPerm', '64Trey.Lockman22@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '48ae5bf7-073c-4eed-a87f-1edcda09403c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d7e04fa7-df5f-4aa1-bc6a-40dc94f1b71b', 'LaPerm', 'Siamese', 'Kurilian Bobtail', '71Myriam_Hoeger@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', 'cf15e26c-8e8e-4213-9b4e-3a21e5993a33');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('032c9f2f-317b-4332-b5b9-575b42646980', 'Thai', 'Birman', 'Serengeti', '78Jaylan87@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '5e932f55-c381-4b6f-be4e-d38da5d01b58');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6c0e74b4-b7ce-420c-a9e8-cc5a6b15a7a2', 'Savannah', 'Korat', 'Thai', '85Hermina_Schamberger@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '61ff9cd7-ae99-4c4b-94ab-a4832e94ddf2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('393f4da7-fa54-4ca9-8bc4-2f9795c9c105', 'Russian Blue', 'Bombay', 'Selkirk Rex', '92Cleo_Towne-Cremin72@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('db341cb3-b18e-409d-8901-c66f03d23483', 'Himalayan', 'American Curl', 'Havana', '99Robb_Mann@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '9411db0b-64e3-422c-80bc-0ee3120dc5c2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('85752205-3919-48bb-828c-e3dbb855a42c', 'Peterbald', 'Kurilian Bobtail', 'American Curl', '106Chanelle86@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', 'cf4a65cc-b5cf-4315-9785-c0b113c45558');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4782ff69-598d-4f2d-8254-fb1523a68a17', 'Somali', 'Sokoke', 'Munchkin', '113Gerda_Ullrich28@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '61ff9cd7-ae99-4c4b-94ab-a4832e94ddf2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('00259339-1ff1-41f5-975f-84d456cfa646', 'Egyptian Mau', 'Sokoke', 'Manx', '120Walton_Klocko@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '3d7a6c10-0ef0-400d-9158-0e2d5d683fea');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('fd7fe7c0-5007-4184-8585-080ad6eec02b', 'Exotic Shorthair', 'Somali', 'American Shorthair', '127Shanon.Goldner17@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '48ae5bf7-073c-4eed-a87f-1edcda09403c');

INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('f83559fa-a535-4798-a46b-e8dee09512ec', 'Russian Blue', '2024-02-19T23:11:35.834Z', '670983d8-fbc5-4564-aedf-399f2334fe76');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('c0adf5d9-fdba-4923-b4c0-12f4e720e33a', 'Exotic Shorthair', '2023-07-13T09:16:02.956Z', 'cf4a65cc-b5cf-4315-9785-c0b113c45558');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('022f2cee-c8b0-4990-8b5c-c3de76867b15', 'Chartreux', '2023-04-17T06:08:35.530Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('05b433f3-d1e0-4b09-9876-d819188188c0', 'Abyssinian', '2023-11-04T21:05:27.170Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('7e1ce939-04e9-4120-8e3e-1950985415a6', 'Norwegian Forest Cat', '2023-04-11T20:08:45.981Z', 'e12a384c-1cb4-4757-b68f-388cd1ee0c8e');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('a382a574-b97f-4d5a-af6c-ce72e2caa7f3', 'Donskoy', '2023-03-03T06:09:24.373Z', '3d7a6c10-0ef0-400d-9158-0e2d5d683fea');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('422a1007-0438-4eae-af43-d35c61bc6c4f', 'Thai', '2024-04-08T22:01:52.091Z', '3d7a6c10-0ef0-400d-9158-0e2d5d683fea');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('b3addc8a-2afa-4745-8bae-f0cd9751f5ed', 'Highlander', '2023-10-10T21:50:08.730Z', '9411db0b-64e3-422c-80bc-0ee3120dc5c2');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('2b3caf0a-1056-4e59-966f-ade92a0d2008', 'Singapura', '2023-08-30T14:18:26.956Z', '670983d8-fbc5-4564-aedf-399f2334fe76');
INSERT INTO "financialdata" ("id", "data", "submissionDate", "userId") VALUES ('3d768cf3-f80b-4885-b185-84c6a455977b', 'Birman', '2025-01-02T08:49:29.524Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('c3878cbd-02cd-4c57-a947-e337bd043fef', 79183, 97529, 46515, '7e1ce939-04e9-4120-8e3e-1950985415a6');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('7d471b22-adb6-4399-ba4c-736d6ef5b39d', 90556, 6138, 89910, 'c0adf5d9-fdba-4923-b4c0-12f4e720e33a');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('673b462f-ca58-498c-bdef-c5af4cc3c088', 96341, 94334, 91549, '022f2cee-c8b0-4990-8b5c-c3de76867b15');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('b0c68bc8-5033-4b55-b5cd-7e7d96027817', 26328, 5045, 32947, 'c0adf5d9-fdba-4923-b4c0-12f4e720e33a');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('4105a2a9-f3f9-4432-8ed0-2b65178cf43a', 99392, 10406, 41272, 'f83559fa-a535-4798-a46b-e8dee09512ec');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('39391d3b-95de-4272-9dd8-ddfd2f33d042', 96071, 33164, 47652, 'f83559fa-a535-4798-a46b-e8dee09512ec');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('1066a328-f994-4e1d-8602-383dd31a93fb', 58415, 98010, 77229, 'a382a574-b97f-4d5a-af6c-ce72e2caa7f3');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('fdce4a22-8487-4899-93e9-9aac45fa0f3b', 72681, 91254, 52790, '022f2cee-c8b0-4990-8b5c-c3de76867b15');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('4b7d7b4c-a7e1-4c0e-8964-f31c4473b7f0', 9167, 42034, 60922, 'f83559fa-a535-4798-a46b-e8dee09512ec');
INSERT INTO "metric" ("id", "cashMetric", "revenueMetric", "unitEconomicMetric", "financialDataId") VALUES ('c0aeb2a6-07d8-4fe5-8849-3e8c29f3d208', 13913, 68156, 13665, '7e1ce939-04e9-4120-8e3e-1950985415a6');

INSERT INTO "insight" ("id", "content") VALUES ('51aa2799-f8ac-45dd-b5a8-628679a78192', 'Somali');
INSERT INTO "insight" ("id", "content") VALUES ('37b86f18-63e1-4f29-9ee0-a9ac4cb250e3', 'Thai');
INSERT INTO "insight" ("id", "content") VALUES ('bc0d0964-bd50-4341-9c1f-d8fca0f37526', 'Siberian');
INSERT INTO "insight" ("id", "content") VALUES ('f793d404-da1c-4c44-be93-eda70332d9ca', 'Nebelung');
INSERT INTO "insight" ("id", "content") VALUES ('00acdff6-6f74-4705-a8d5-7ca02c16c0d9', 'Cornish Rex');
INSERT INTO "insight" ("id", "content") VALUES ('16ecca50-97a6-4c9f-ad2a-a65319dfffa0', 'Thai');
INSERT INTO "insight" ("id", "content") VALUES ('22b1908e-33ed-4a48-a290-5159ed1fb256', 'Havana');
INSERT INTO "insight" ("id", "content") VALUES ('dc4a6643-b654-4149-b5c6-52cd0a0177e8', 'Savannah');
INSERT INTO "insight" ("id", "content") VALUES ('851c7916-336d-4123-b981-97f614a607df', 'Chartreux');
INSERT INTO "insight" ("id", "content") VALUES ('24385aac-8a11-4542-89bd-318418bca5e1', 'Maine Coon');
    `,
    )
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
