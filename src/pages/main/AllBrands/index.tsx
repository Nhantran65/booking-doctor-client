import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from "@/models/constants";
import {
    AllBrandsWrapper,
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
import { BRAND_CODE, BRAND_KEYS, FETCH_STATUS } from "@/models/enums";
import { IBrandInfo, IGetListBrandsParams } from "@/models/interfaces";
import { getListBrandsAPI } from "@/api/brand";
import Loading from "@/components/Loading";

const AllBrands = () => {
    const [pageNumber, setPageNumber] = useState(PAGE_NUMBER_DEFAULT);
    const [pageSize, setPageSize] = useState(PAGE_SIZE_DEFAULT);
    const [brandInfo, setBrandInfo] = useState<IBrandInfo>();

    const { data: listBrands, fetchStatus } = useQuery({
        queryKey: [BRAND_KEYS.GET_LIST, pageNumber, pageSize],
        queryFn: () => {
            const params: IGetListBrandsParams = {
                pageNumber: pageNumber - 1,
                pageSize: PAGE_SIZE_DEFAULT,
                // more params...
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
        <AllBrandsWrapper>
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
        </AllBrandsWrapper>
    );
};

export default AllBrands;
