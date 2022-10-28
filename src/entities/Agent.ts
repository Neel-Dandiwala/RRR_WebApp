import { Field, ID, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, ObjectID, ObjectIdColumn } from "typeorm";
import { Waste } from "./Waste";
// import { MaxLength, Length } from "class-validator";

@ObjectType()
@Entity()
export class Agent extends BaseEntity {

    @Field(() => ID)
    @ObjectIdColumn()
    _id: ObjectID;

    @Field()
    @Column({ unique: true })
    agentName!: string;

    @Field()
    @Column({ unique: true })
    agentEmail!: string;

    @Field()
    @Column()
    agentPassword!: string;

    @Field(() => Int)
    @Column()
    agentAge: number;

    @Field()
    @Column({ unique: true })
    agentMobile!: string;

    @Field()
    @Column()
    agentCity: string;

    @Field()
    @Column()
    agentState: string;

    @Field({ nullable: false })
    @Column()
    agentPincode: string;

    @OneToMany(() => Waste, (waste) => waste.wasteAgent)
    agentWaste: Waste[];

    @Field(() => String)
    @CreateDateColumn()
    agentCreatedAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    agentUpdatedAt: Date;
}