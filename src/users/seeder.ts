import { MongooseModule } from "@nestjs/mongoose"
import { seeder } from "nestjs-seeder"
import { Users, UsersSchema } from "./users.entity"
import { UsersSeeder } from "./users.seeder"

seeder({
    imports: [
        MongooseModule.forRoot("mongodb+srv://krish1991:karthi198pappu@cluster0.gtjqf.mongodb.net/solution"),
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}])
    ]
}).run([UsersSeeder])
