const { log } = require('console');
const { userInfo } = require('os');
const db=require('./db')


events = {
   userid:"divya" ,alltodo: ["CLEANING","ELECTRICITY BILL" , "MEDICAL BILL"] , Completed:["Driving","Painting"] 
   
    }


   const register=()=>{
     const newUser= new db.Todo({
       alltodo:[],
       Completed:[]
       
     })
     newUser.save();

    
   }

    const save =(todoevent)=>{
        let todos=todoevent;
        return db.Todo.findOne({})
        .then(user => {
          if(user){
              user["alltodo"].push(todos)
              user.save();
              return{
                statusCode:200,
                status:true,
                message:"todo added sucessfully press the show all my todo update button to see the updated table"
                
              }
              }
              else{
                return{
                    statusCode:422,
                    status:false,
                    message:"todo didn't added"
              }}
         })}

         const showtodo=()=>{
           todolist=[]
           completed=[]
               return db.Todo.findOne({})
               .then(user=>{
                 console.log(user["alltodo"])
                 for (let i = 0; i <user["alltodo"].length ; i++) {
                  todolist.push(
                    user["alltodo"][i]
                  )
                  completed.push(
                    user["Completed"][i]
                  )
  
              }
              console.log(todolist)
  
                   return todolist
               })

         }

         const showcompleted=()=>{
         
          completed=[]
              return db.Todo.findOne({})
              .then(user=>{
                console.log(user["Completed"])
                for (let i = 0; i <user["Completed"].length ; i++) {
                 
                 completed.push(
                   user["Completed"][i]
                 )
 
             }
             console.log(completed)
 
                  return completed
              })

        }


        
        const aftersorttodolist=(todolist,completelist)=>{
            
          return db.Todo.findOne({})
          .then(user => {
            console.log("from front end",todolist)
            user["alltodo"]=todolist;
            user["Completed"]=completelist

          
            user.save();
            console.log("okayyyy",user["alltodo"]);

            return{
              statusCode:200,
              status:true,
              message:"both todolist and donelist sorted"
              
            }
            

          
          })

        }
    

       const updatealltodo =(fi,si,fivalue,sivalue)=>{
         
           let findex=fi;
           let secindex=si;
           let firstvalue=fivalue;
           let secvalue=sivalue;
           
           return db.Todo.findOne({})
           .then(user => {
               if(user) {
               

                user["alltodo"].set(findex, secvalue);
                user["alltodo"].set(secindex,firstvalue)
           console.log(user["alltodo"].set(findex, secvalue));
           user.save();
  
           return{
            statusCode:200,
            status:true,
            message:"todolist updated suceesfully",
            newmess:user["alltodo"]
            
          }}
          else{
            return{
                statusCode:422,
                status:false,
                message:"todolist didn't updated"
                
              } 
          }})}
           
          

       const updateCompleted =(fi,si,fivalue,sivalue)=>{
        let findex=fi;
           let secindex=si;
           let firstvalue=fivalue;
           let secvalue=sivalue;
           return db.Todo.findOne({})
           .then(user => {
               if(user) {
               

                user["Completed"].set(findex, secvalue);
                user["Completed"].set(secindex,firstvalue)
           user.save();
  
           return{
            statusCode:200,
            status:true,
            message:"Done list updated suceesfully",
            newmess:user["alltodo"]
            
          }}
          else{
            return{
                statusCode:422,
                status:false,
                message:"Completedlist didn't updated"
                
              } 
          }})}




          
          // const aftersortcompletelist=(completelist)=>{
          //   console.log("something")
            
          //   return db.Todo.findOne({})
          //   .then(user => {
          //     // console.log(todolist)
          //     user["Completed"]=completelist;
          //     console.log("wolkay",user["Completed"])
          //     user.save();
            
          //   })

          // }


          // const deletealltodo=(arrayind )=>
          // {
          //     let arrindex=arrayind;
          //     console.log(arrindex)
              
          //     return db.Todo.findOne({"userid":"divya"})
          //     .then(user => {
          //       if(user) {
                
 
          //        user["alltodo"].splice(arrindex,1);
               
          //   user.save();
          //   return{
          //       statusCode:200,
          //       status:true,
          //       message:"alltodolist updated suceesfully",
          //       newmess:user["alltodo"]
                
          //     }

          // }})}
           
        
    
    module.exports={save,showtodo ,showcompleted,aftersorttodolist,register,updateCompleted,updatealltodo};