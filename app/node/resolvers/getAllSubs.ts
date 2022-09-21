const ENTITY_MDV2 = "newslettercustombruno"
const SCHEMA_MDV2 = "newslettercustombruno"

import { result } from "../../utils/return"

export const getAllSubs = async (
    _: any,
    __: any,
    _ctx: Context
) => {     
    try {
        const response = async function getAll() {
            return await _ctx.clients.masterdata.searchDocumentsWithPaginationInfo({
                dataEntity: ENTITY_MDV2,
                schema: SCHEMA_MDV2,
                fields: ["userEmail", "categories"],
                pagination: { page: 1, pageSize: 999 },
                sort: "createdIn ASC"
            })
        }
        console.log(result(200))
        console.log(await response())
        const dada = await response()
        return dada
    }
    catch (e) {
        console.log(e)
        console.log(result(500))
        return true
    } 

    /* 
    return await _ctx.clients.masterdata.searchDocumentsWithPaginationInfo({
          dataEntity: ENTITY_MDV2,
          schema: SCHEMA_MDV2,
          fields: ["userEmail", "categories"],
          pagination: { page: 1, pageSize: 999 },
        })

         */
/* 
    const response =  await _ctx.clients.masterdata.searchDocumentsWithPaginationInfo({
            dataEntity: ENTITY_MDV2,
            schema: SCHEMA_MDV2,
            fields: ["userEmail", "categories"],
            pagination: { page: 1, pageSize: 999 },
            sort: 'createdIn ASC',
        })    

    return response
 */
    


    /*     const data = await _ctx.clients.masterdata // _ctx.clients.masterdata.searchDocuments
            .   ({
                dataEntity: COURSE_ENTITY,
                fields: ['userEmail', 'categories'],
                schema: 'teste-newsletter',
                sort: `userEmail DESC`,
            })
    
        return data */

    /* 
        async function getAll() {
            // @ts-ignore
            let users = [];
    
            let isScrolling = true;
    
            let currentPage = 1;
    
            while (isScrolling) {
                let response = await _ctx.clients.masterdata.searchDocuments({
                    dataEntity: COURSE_ENTITY,
                    schema: 'teste-newsletter',
                    fields: ["_all"],
                    //where: `cluster=${cluster}`,
                    pagination: {
                        page: currentPage,
                        pageSize: 50
                    },
                })
    
                // @ts-ignore
                users = users.concat(response)
                // @ts-ignore
                if (response.length < 1) {
                    isScrolling = false;
                }
                currentPage++;
            }
            return users;
        }
        const data = await  getAll()
    
        return data
    
     */




}