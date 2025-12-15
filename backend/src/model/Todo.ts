import {prop , modelOptions , index ,getModelForClass} from "@typegoose/typegoose"

type TodoStatus = "Started" | "Not yet started" | "Completed"

@index({title : 1  },{unique : true})

@modelOptions({schemaOptions: {timestamps:true}})

export class Todo{

    @prop({required: true})
    public title!: string

    @prop({required:true})
    public description!: string

    @prop({default: "Not yet started" , enum : ["Started" , "Not yet started" , "Completed"]})
    public status?: TodoStatus

    @prop()
    public lastDate?:string

}

export const TodoModel = getModelForClass(Todo)