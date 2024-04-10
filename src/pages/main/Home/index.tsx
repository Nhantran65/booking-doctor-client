import {
    HomeWrapper,
    Container,
    Brand,
    BrandName,
    BrandMainLogo,
    BrandBoostPTELogo,
    BrandDescription,
    SubWrapper,
    VisitButton,
    Link
} from "./styles";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {  BRAND_KEYS, FETCH_STATUS } from "@/models/enums";
import { IGetListBrandsParams } from "@/models/interfaces";
import { getListBrandsAPI } from "@/api/brand";
import Loading from "@/components/Loading";

const Home = () => {

    const { data: listBrands, fetchStatus } = useQuery({
        queryKey: [BRAND_KEYS.GET_LIST],
        queryFn: () => {
            const params: IGetListBrandsParams = {
            };

            return getListBrandsAPI();
        },
    });
    ;
    

    const brandPTE = listBrands?.find(function(brand){
        return brand.brandCode == "PTE";
    })

    const brandPOT = listBrands?.find(function(brand){
        return brand.brandCode == "POT";
    })
    
    console.log(brandPTE);
    console.log(brandPOT);

    return (
        <HomeWrapper>
            {fetchStatus === FETCH_STATUS.FETCHING ? (
                <Loading />
            ) : (
                <Container>
                    <Brand>
                        <BrandBoostPTELogo></BrandBoostPTELogo>
                        <SubWrapper>
                            <BrandName>{brandPTE?.productName}</BrandName>
                                <VisitButton>
                                    {
                                        brandPTE?.websiteCPanel &&
                                        <Link href = {brandPTE?.websiteCPanel}>
                                            Visit
                                        </Link>
                                    }
                                        
                                </VisitButton>
                        </SubWrapper>
                        <BrandDescription>
                            {brandPTE?.description}
                        </BrandDescription>
                    </Brand>
                    <Brand>
                        <BrandMainLogo></BrandMainLogo>
                        <SubWrapper>
                            <BrandName>{brandPOT?.productName}</BrandName>
                            <VisitButton>
                                {
                                    brandPOT?.websiteCPanel &&
                                    <Link href = {brandPOT?.websiteCPanel}>
                                        Visit
                                    </Link>
                                }
                                    
                            </VisitButton>
                        </SubWrapper>
                        <BrandDescription>
                            {brandPOT?.description}
                        </BrandDescription>
                    </Brand>
                </Container>
            )}
        </HomeWrapper>
    );
};

export default Home;
