import { supabase } from "@/utils/supabase";
import { type Client } from "@/types/clientDB";

export async function getAllProfileClient(){
    const { data, error } = await supabase.from('clientProfile').select('*')

    /* Case: Error in the Fetch Data */
    if (error) {
        console.log('Error:',error)
        return []
    }

    /* Case: Not Error in the Fetch Data */
    return data as Client[]
}
