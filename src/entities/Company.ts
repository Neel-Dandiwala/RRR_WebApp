import { Field, ID, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ObjectIdColumn, ObjectID } from "typeorm";

@ObjectType()
@Entity()
export class Company extends BaseEntity {

    @Field(() => ID)
    @ObjectIdColumn()
    _id: ObjectID;

    @Field()
    @Column({ unique: true })
    companyName!: string;

    @Field()
    @Column({ unique: true })
    companyEmail!: string;

    @Field()
    @Column()
    companyPassword!: string;

    @Field(() => Int)
    @Column()
    companyPaperPrice: number;

    @Field(() => Int)
    @Column()
    companyPlasticPrice: number;

    @Field(() => Int)
    @Column()
    companyElectronicPrice: number;

    @Field()
    @Column()
    companyAddress!: string;

    @Field()
    @Column()
    companyCity: string;

    @Field()
    @Column()
    companyState: string;

    @Field({ nullable: false })
    @Column()
    companyPincode: string;

    @Field(() => String)
    @CreateDateColumn()
    companyCreatedAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    companyUpdatedAt: Date;
}