"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_seeder_1 = require("nestjs-seeder");
const users_entity_1 = require("./users.entity");
const users_seeder_1 = require("./users.seeder");
nestjs_seeder_1.seeder({
    imports: [
        mongoose_1.MongooseModule.forRoot("mongodb+srv://krish1991:karthi198pappu@cluster0.gtjqf.mongodb.net/solution"),
        mongoose_1.MongooseModule.forFeature([{ name: users_entity_1.Users.name, schema: users_entity_1.UsersSchema }])
    ]
}).run([users_seeder_1.UsersSeeder]);
//# sourceMappingURL=seeder.js.map