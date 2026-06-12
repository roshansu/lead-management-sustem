import React, {useEffect, useState} from "react";
import KPI from "../KPI";
import {
  Users,
  Globe,
  Search,
  Megaphone,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import SourceLeadChart from "./SourceLeadChart";
import Loader from "../Loader";
import apiCall from "../../api/api";

const AnalyticsDashboard = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async()=>{
    try{
      setLoading(true)
      const res = await apiCall('/analytics')
      setData(res)
      console.log(res)


    }catch(err){

    }
    setLoading(false)
  }

  useEffect(()=>{
    getData()
  },[])

  if(loading) return <Loader/>

  return (
    <div>
        <div className="grid grid-cols-4 gap-4">
          <KPI title="Total Leads" value={data.totalLeads} icon={BarChart3} />

          <KPI title="Website Leads" value={data.websiteLeads} icon={Globe} />

          <KPI title="Meta Ads" value={data.metaLeads} icon={Megaphone} />

          <KPI title="Google Ads" value={data.googleLeads} icon={Search} />
        </div>
        <SourceLeadChart data={data.sourceStats}/>
    </div>
  );
};

export default AnalyticsDashboard;
