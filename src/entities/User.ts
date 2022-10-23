import { Field, ID, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, ObjectIdColumn, ObjectID } from "typeorm";
import { Waste } from "./Waste";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => ID)
    @ObjectIdColumn()
    _id: ObjectID;

    @Field()
    @Column({ unique: true })
    userName!: string;

    @Field()
    @Column({ unique: true })
    userEmail!: string;

    @Column()
    userPassword!: string;

    @Field(() => Int)
    @Column()
    userAge: number;

    @Field()
    @Column()
    userAddress: string;

    @Field()
    @Column({ unique: true })
    userMobile: string;

    @Field()
    @Column()
    userCity: string;

    @Field({ nullable: true })
    @Column()
    userState: string;

    @OneToMany(() => Waste, (waste) => waste.wasteId)
    userWaste: Waste[];

    @Field()
    @CreateDateColumn()
    userCreatedAt: Date;

    @Field()
    @UpdateDateColumn()
    userUpdatedAt: Date;
}