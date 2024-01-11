let status = '30';
let resetValue = (status === '30') ? 'X' : '';
xml_str =
    `<?xml version='1.0' encoding='UTF-8'?>
<ns1:ZFIF_DOC_IF_APPR_XML_CREATE xmlns:ns1='urn:sap-com:document:sap:rfc:functions'>
    <IV_BUKRS>K100</IV_BUKRS>
    <IV_GJAHR>${year}</IV_GJAHR>
    <IV_EMPNO>${username}</IV_EMPNO>
    <IV_RESET>${resetValue}</IV_RESET>
    <IV_STCHK></IV_STCHK>
    <IT_BELNR>
        <ITEM>
            <BELNR>${slipNo}</BELNR>
        </ITEM>
    </IT_BELNR>
</ns1:ZFIF_DOC_IF_APPR_XML_CREATE>`;

if(status === '25' && fileCount && fileCount > 0){
    // Do something
}